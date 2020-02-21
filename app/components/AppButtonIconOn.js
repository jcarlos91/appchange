import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";

export default class AppButtonIconOn extends Component {
    render() {
        const {title, iconName, iconSize, iconColor, action, disabled, color } = this.props;
        return (
            <TouchableOpacity onPress={action}  disabled={disabled}>
                <View style={[(disabled ? styles.botonOff : styles.botonOn),{ backgroundColor: (disabled ? '#E9EFF3' : color)}]}>
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
