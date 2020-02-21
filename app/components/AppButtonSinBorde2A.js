import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Grid, Col } from 'native-base';

import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";


export default class AppButtonSinBorde2A extends Component {

    render() {
        const { title, action } = this.props;
        return (
            <TouchableOpacity onPress={action}>
                <View style={[styles.obj_center]}>
                    <Text style={[styles.tg_1421_2A9]}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
