import React, { Component } from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import { Header, Left, Right, Body } from 'native-base';
import styles from "./../assets/newstyles";
import MyIcon from '../icon-font';


export default class AppHeader extends Component {

    render() {
        const { back = false } = this.props;
        return (
            <Header style={{backgroundColor:'#fff', height: 80}}>
                <Left style={{flex:1}}>
                    { back && (
                        <TouchableOpacity style={{paddingLeft:10}} transparent onPress={() => this.props.navigation.goBack()}>
                            <MyIcon
                                name={'angle-left'}
                                size={40}
                                color={'#000'}
                            />
                        </TouchableOpacity>
                    )}
                </Left>
                <Body style={{flex:2}}>
                    <View style={[styles.obj_center]}>
                        <Image source={require('../assets/change.png')} />
                    </View>
                </Body>
                <Right style={{flex:1}}/>
            </Header>

        );
    }
}
