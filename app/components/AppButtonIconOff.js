import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Grid, Col } from 'native-base';

import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";


export default class AppButtonIconOff extends Component {

    render() {

        const {title, iconName, iconSize, iconColor} = this.props;

        return (

            <TouchableOpacity disabled>
                <View style={[styles.botonOff]}>
                    <View style={[styles.text_inline_center]}>
                        <View style={[styles.marg_r8]}>
                            <MyIcon
                                name={iconName}
                                size={iconSize}
                                color={iconColor}
                            />
                        </View>
                        <View>
                            <Text style={[styles.tg_1621m_fff]}>{title}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
}
