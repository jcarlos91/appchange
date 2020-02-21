import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';

import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";


export default class AppButtonIconConBorde extends Component {

    render() {

        const {action, title, iconName, iconSize, iconColor} = this.props;

        return (

            <TouchableOpacity onPress={action}>
                <View style={[styles.botonConBorde]}>
                    <View style={[styles.text_inline_center]}>
                        <View style={[styles.marg_r8]}>
                            <MyIcon
                                name={iconName}
                                size={iconSize}
                                color={iconColor}
                            />
                        </View>
                        <View>
                            <Text style={[styles.tg_1621m_2A9]}>{title}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
}
