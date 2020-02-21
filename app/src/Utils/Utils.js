import React, { useEffect } from 'react';
import Realm from "../realm/realm";
import { PermissionsAndroid, View, Text, TouchableOpacity } from 'react-native';
import styles from '../../assets/newstyles';
import AppAlert from '../../components/AppAlert';

const flashMessage = Realm.objects('FlashMessage');
class Utils {

    /* create methods of message (success, info, danger, etc) */
    createMessage(type, title, message ){
        let iconCircleColor = '#777';
        let iconName = 'check';
        let iconColor = '#fff';
        if(type === 'success'){
            iconCircleColor = '#3797DB';
            iconName = 'check';
        }else if(type === 'info'){
            iconCircleColor = '#900096';
            iconName = 'info';
        }else if(type === 'danger'){
            iconCircleColor = '#F00';
            iconName = 'cancel';
        }else if(type === 'download'){
            iconCircleColor = '#00796b';
            iconName = 'download-alt';
        }

        let today = new Date();
        let dateTime = today.getDate() + "/" + parseInt(today.getMonth() + 1) + "/" + today.getFullYear() + " - " + today.getHours() + ":" + today.getMinutes();
        try {
            Realm.write(() => {
                Realm.delete(Realm.objects('FlashMessage'));
                Realm.create('FlashMessage', {
                    title: title,
                    message: message ,
                    dateTime: dateTime,
                    iconCircleColor: iconCircleColor,
                    iconName: iconName ,
                    iconColor: iconColor
                });
            });
        } catch (e) {
            console.warn("Error on creation" + e.message);
        }
    }

    // checkFlashMessage(){
    //     if(flashMessage.length > 0) {
    //         return (
    //             <View style={[styles.box_mensaje,{backgroundColor: flashMessage[0].iconCircleColor}]}>
    //                 <Text style={[styles.tg_1624r_007,{color: '#FFF'}]}>{flashMessage[0].message}</Text>
    //             </View>
    //         )
    //     }
    // }

    checkFlashMessage(){
        if(flashMessage.length > 0) {
            return (
                <View style={{position:'absolute', left:0, right:0, zIndex:2}}>
                    <AppAlert
                        iconCircleColor={flashMessage[0].iconCircleColor}
                        iconName={flashMessage[0].iconName}
                        iconSize={20}
                        iconColor={flashMessage[0].iconColor}
                        title={flashMessage[0].title}
                        dateTime={flashMessage[0].dateTime}
                        message={flashMessage[0].message}
                    />
                </View>
            )
        }
    }

    async checkPermissionAndroid(permission){
        if(permission === 'WRITE_EXTERNAL_STORAGE') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        }else{
            return false;
        }
    }
}
const utils = new Utils();
export default utils;
