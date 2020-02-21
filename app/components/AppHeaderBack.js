import React, { Component } from 'react';
import {  TouchableOpacity, View } from 'react-native';
import {  Header, Left, Right, Body, Text } from 'native-base';
import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";


export default class AppHeaderBack extends Component {

    render() {

        const { goBack } = this.props.navigation;
        const {title} = this.props;

        return (

            <Header style={{backgroundColor:'#fff'}}>
                <Left>
                    <TouchableOpacity style={{paddingLeft:10}} transparent onPress={() => goBack()}>
						<MyIcon
							name={'arrow_back'}
							size={20}
							color={'#939393'}
						/>
					</TouchableOpacity>
                </Left>
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
