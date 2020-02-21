import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Header, Right, Body, Text } from 'native-base';
import styles from "./../assets/newstyles";


export default class AppHeaderLegal extends Component {

    render() {

        const { goBack } = this.props.navigation;
        const {title} = this.props;

        return (

            <Header style={{
                    backgroundColor:'#f9f9f9',
                    shadowColor:"#777",
                    shadowOffset: { width:0, height:1 },
                    shadowOpacity: 0.1,
                    elevation: 3
                }}>

                <Body>
                    <View style={[styles.obj_left]}>
                        <Text style={[styles.tg_1827u_363]}>{title}</Text>
                    </View>
                </Body>
                <Right>
                    <TouchableOpacity transparent onPress={() => goBack()}>
                        <Text style={[styles.tg_1624m_428]}>Salir</Text>
                    </TouchableOpacity>
                </Right>
            </Header>

        );
    }
}
