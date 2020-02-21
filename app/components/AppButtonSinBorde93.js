import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, } from 'native-base';
import styles from '../assets/newstyles';


export default class AppButtonSinBorde93 extends Component {

    render() {
        const {title, action } = this.props;
        return (

            <TouchableOpacity onPress={action}>
                <View style={[styles.obj_center, styles.pad_8]}>
                    <Text style={[styles.tg_1624r_939]}>{title}</Text>
                </View>
            </TouchableOpacity>

        );
    }
}
