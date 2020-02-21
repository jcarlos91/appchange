import React, { Component } from 'react';
import { View } from 'react-native';

import { Header, Left, Right, Body, Text } from 'native-base';
import styles from "./../assets/newstyles";

export default class AppHeaderTitle extends Component {

    render() {

        const {title} = this.props;

        return (

            <Header style={{backgroundColor:'#fff'}}>
                <Left />
                <Body>
                    <View style={[styles.obj_center]}>
                        <Text style={[styles.tg_1827u_363]}>{title}</Text>
                    </View>
                </Body>
                <Right />
            </Header>

        );
    }
}
