import {Platform} from "react-native";
import OAuthManager from "./oauthManager";
import endpoints from "./apiEndpoints";
import RNFetchBlob from 'rn-fetch-blob';
import stringify from 'query-string';

const OS = Platform.OS;
class ApiBase {
    static _handleErrors(responseJson, endpoint) {
        let error = null;
        if (responseJson.error !== undefined) {
            error = new Error(responseJson.error_description);
            throw error;
        } else if (responseJson.status_code !== undefined && responseJson.status_code !== 200  && responseJson.status_code !== 401) {
            error = new Error(responseJson.errors[0]);
            throw error;
        } else if (responseJson.code !== undefined && responseJson.code !== 200) {
            error = new Error(responseJson.message);
            throw error;
        }else if(responseJson.status === 'ERROR' && responseJson.status_code === 401){
            error = new Error(responseJson.message);
            throw error;
        }
    }

    static async __makeCall(endpoint, method, headers, params, callback, fullyAuthenticated = true) {
        try {
            let request = {
                method: method,
                headers: headers,
            };

            if (method !== 'GET' && method !== 'HEAD') {
                request['body'] = JSON.stringify(params);
            }

            let response = await fetch(endpoints.uriBase + endpoint, request);
            let responseJson = await response.json();
            responseJson['_headers'] = response.headers;
            responseJson['_status'] = response.status;
            this._handleErrors(responseJson, endpoint);
            callback(null, responseJson);
        } catch (err) {
            if (err.message === 'Network request failed') {
                err = new Error('Hubo un error al obtener los datos, revise su conexión a  internet.')
            }

            if (err.message === 'The access token provided has expired.' && fullyAuthenticated) {
                await OAuthManager.refresh(() => {
                    OAuthManager.getToken(async (err, accessToken) => {
                        try {
                            if (err) {
                                callback(err);
                            } else {
                                headers['Authorization'] = 'Bearer ' + accessToken;
                                let response = await fetch(endpoints.uriBase + endpoint, request);
                                let responseJson = await response.json();
                                responseJson['_headers'] = response.headers;
                                responseJson['_status'] = response.status;
                                this._handleErrors(responseJson, endpoint);
                                callback(null, responseJson);
                            }
                        } catch (err) {
                            callback(err);
                        }
                    });
                });
            } else {
                callback(err);
            }
        }
    }

    static async _fetch(endpoint, method, params, callback, secure = true, fullyAuthenticated = true) {
        let canContinue = true;
        try {
            let headers = {
                'Content-type': 'application/json'
            };
            if (secure) {
                if (fullyAuthenticated) {
                    await OAuthManager.getToken((err, accessToken) => {
                        try {
                            if (err) {
                                canContinue = false;
                                callback(err);
                            } else {
                                headers['Authorization'] = 'Bearer ' + accessToken;
                                this.__makeCall(endpoint, method, headers, params, callback, fullyAuthenticated);
                            }
                        } catch (err) {
                            callback(err);
                        }
                    });
                } else {
                    await OAuthManager.getAnonymousToken((err, accessToken) => {
                        try {
                            if (err) {
                                canContinue = false;
                                callback(err);
                            } else {
                                headers['Authorization'] = 'Bearer ' + accessToken;
                                this.__makeCall(endpoint, method, headers, params, callback);
                            }
                        } catch (err) {
                            callback(err);
                        }
                    });
                }
            } else {
                this.__makeCall(endpoint, method, headers, params, callback);
            }

        } catch (e) {
            if (canContinue) {
                callback(e);
            }
        }
    }

    static async _fetchBlob(endpoint, method, params, callback, secure = true) {
        let canContinue = true;
        try {
            let headers = {
                'Content-Type': 'application/vnd.ms-excel',
            };
            if (secure) {
                await OAuthManager.getToken((err, accessToken) => {
                    if (err) {
                        canContinue = false;
                        callback(err);
                    } else {
                        headers['Authorization'] = 'Bearer '+ accessToken;
                    }
                });
            }

            if (canContinue) {
                let request = {
                    method: method,
                    headers: headers,
                };

                if (method !== 'GET' && method !== 'HEAD') {
                    request['body'] = JSON.stringify(params);
                }


                const fileName = 'change';
                const {fs} = RNFetchBlob;
                const downloads = fs.dirs.DownloadDir;
                let url = stringify.stringify(params);
                RNFetchBlob
                    .config({
                        path: fs.dirs.DocumentDir + '/test.xls',
                        addAndroidDownloads: {
                            useDownloadManager: true, // <-- this is the only thing required
                            // Optional, override notification setting (default to true)
                            notification: true,
                            // Title of download notification
                            title: 'Download Success!',
                            // Optional, but recommended since android DownloadManager will fail when
                            // the url does not contains a file extension, by default the mime type will be text/plain
                            mime: 'application/vnd.ms-excel',
                            description: 'File downloaded by download manager.',
                            // Make the file scannable  by media scanner
                            mediaScannable: false,
                            path: downloads + '/' + fileName + '.xls',
                        }
                    })
                    .fetch('GET', endpoints.uriBase + endpoint + '?' + url, headers)
                    .then((res) => {
                        if(OS === 'ios'){
                            // console.warn(res.data);
                            RNFetchBlob.ios.openDocument(res.path());
                            callback(null, '');
                        }else{
                            callback(null, res.path());
                        }

                    })
                    .catch((errorMessage, statusCode) => {
                        alert(errorMessage);
                        // callback(errorMessage);
                    });
            }
        } catch (e) {
            if (canContinue) {
                callback(e);
            }
        }
    }

    static _get(endpoint, params, callback, secure = true, fullyAuthenticated = true) {
        let data = this.__replaceParams(endpoint, params);
        return this._fetch(data.endpoint+'?'+this.__params(data.params), 'GET', {}, callback, secure, fullyAuthenticated);
    }
    static _put(endpoint, params, callback, secure = true, fullyAuthenticated = true) {
        let data = this.__replaceParams(endpoint, params);
        return this._fetch(data.endpoint+'?'+this.__params(data.params), 'PUT', {}, callback, secure, fullyAuthenticated);
    }
    static _post(endpoint, params, callback, secure = true, fullyAuthenticated = true) {
        return this._fetch(endpoint, 'POST', params, callback, secure, fullyAuthenticated);
    }
    static _postPut(endpoint, params, callback, secure = true, fullyAuthenticated = true) {
        return this._fetch(endpoint, 'PUT', params, callback, secure, fullyAuthenticated);
    }
    static _update(endpoint, params, callback, secure = true, fullyAuthenticated = true) {
        return this._fetch(endpoint, 'PATCH', params, callback, secure, fullyAuthenticated);
    }
    static _updateElement(endpoint, elementId, params, callback, secure = true, fullyAuthenticated = true) {
        endpoint = endpoint.replace("{element}", elementId);

        return this._fetch(endpoint, 'PATCH', params, callback, secure, fullyAuthenticated);
    }
    static _delete(endpoint, elementId, callback, secure = true, fullyAuthenticated = true) {
        endpoint = endpoint.replace("{element}", elementId);

        return this._fetch(endpoint, 'DELETE', [], callback, secure, fullyAuthenticated);
    }
    static __replaceParams(endpoint, params) {
        Object.keys(params).map((value, key) => {
            if (endpoint.search('{'+value+'}') !== -1) {
                endpoint = endpoint.replace('{'+value+'}', params[value]);
                delete params[value];
            }
        });

        return {endpoint:endpoint, params:params};
    }
    static __params(data) {
        return Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&');
    }

    static _postBlob(endpoint, params, callback, secure = true){
        return this._fetchBlob(endpoint, 'POST' , params , callback, secure)
    }
}

export default ApiBase;
