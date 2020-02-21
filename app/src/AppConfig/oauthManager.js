import {AppRegistry} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ApiBase from "./apiBase";
import realm from "../realm/realm";
import endpoints from "./apiEndpoints";

class OauthManager{
    static _authData = {
        grant_type: endpoints.grantType,
        scopes: '',
        client_id: endpoints.clientId,
        client_secret: endpoints.clientSecret
    };
    API = ApiBase;
    refreshingToken = false;
    refreshCallBacks = [];

    static authStatus = 'normal';
    static authCheckerCallBack = null;
    static authStatusChecker = setInterval(() => {
        if (OauthManager.authCheckerCallBack && OauthManager.authStatus !== 'normal') {
            OauthManager.authCheckerCallBack();
            OauthManager.authStatus = 'normal';
            OauthManager.authCheckerCallBack = null;
        }
    }, 1000);

    static async _handleAuthData(authResponse) {
        try {
            authResponse['date'] = authResponse['_headers'].get('date');
            let auths = realm.objects('OauthData');
            await realm.write(async () => {
                if (auths.length > 0) {
                    authResponse['user'] = auths[0].user;
                }
                realm.delete(auths);
                realm.create('OauthData', authResponse);
            });

            return authResponse['access_token'];
        } catch (e) {
            alert(e.message);
            return null;
        }
    }

    static auth(username, password, callback) {
        let authData = JSON.parse(JSON.stringify(this._authData));
        authData['username'] = username;
        authData['password'] = password;
        ApiBase._post(endpoints.tokenEndpoint, authData, async (err, response) => {
            let access_token = null;
            if (!err) {
                access_token = await this._handleAuthData(response);
            }
            if (callback) {
                callback(err, access_token);
            }
        }, false);
    }

    static async getAnonymousToken(callback) {
        let authData = JSON.parse(JSON.stringify(this._authData));
        authData['grant_type'] = endpoints.anonymousGrantType;
        ApiBase._post(endpoints.tokenEndpoint, authData, (err, response) => {
            let access_token = null;
            if (!err) {
                access_token = response['access_token'];
            } else {
                alert( err.message);
            }
            if (callback) {
                callback(err, access_token);
            }
        }, false);
    }

    static _getOauthData() {
        return realm.objects('OauthData')[0];
    }

    static isAuth() {
        return this._getOauthData() !== undefined;
    }

    static async getToken(callback) {
        try {
            let OAuthData = this._getOauthData();
            let err = null;
            if (!OAuthData) {
                err = new Error('No auth data');
                callback(err, null);
            } else {
                callback(null, OAuthData.access_token);
            }
        } catch (err) {
            callback(err, null);
        }
    }
    static async refresh(callback) {
        try {
            if (!this.refreshingToken) {
                let OAuthData = this._getOauthData();
                this.refreshingToken = true;
                let authData = JSON.parse(JSON.stringify(this._authData));
                authData['grant_type'] = endpoints.refreshGrantType;
                authData['refresh_token'] = OAuthData.refresh_token;
                ApiBase._post(endpoints.tokenEndpoint, authData, async (err, response) => {
                    let access_token = null;
                    if (!err) {
                        access_token = await this._handleAuthData(response);
                    } else if (!err && response._status === 401) {
                        this.authStatus = 'expired';
                        err = new Error('Invalid token');
                    } else if (err.message === 'Invalid refresh token') {
                        this.authStatus = 'unauthorized';
                    } else if (err.message === 'Refresh token has expired') {
                        this.authStatus = 'expired';
                    }
                    await this.refreshCallBacks.map((callback, key) => {
                        callback(err, access_token);
                        delete this.refreshCallBacks[key];
                    });
                    this.refreshingToken = false;
                }, false);
            } else if(callback){
                this.refreshCallBacks.push(callback);
            }
        } catch (err) {
            await this.refreshCallBacks.map((callback, key) => {
                callback(err, null);
                delete this.refreshCallBacks[key];
            });
            this.refreshingToken = false;
        }
    }
    static async logout() {
        await realm.write(() => {
            realm.delete(realm.objects('OauthData'));
            realm.delete(realm.objects('Event'));
            realm.delete(realm.objects('FlashMessage'));
            realm.delete(realm.objects('Notification'));
            realm.delete(realm.objects('Profile'));
        });

        await AsyncStorage.clear();
    }
}

export default OauthManager;

AppRegistry.registerComponent('OAuthManager', OauthManager, false);
