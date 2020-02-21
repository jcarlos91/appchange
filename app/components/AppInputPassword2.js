import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Item } from 'native-base';
import styles from "./../assets/newstyles";


export default class AppInputPassword extends Component {

    render() {

        const {title, placeholder, placeholderColor, error } = this.props;

        return (

            <View>
                <View>
                    <Text style={[styles.tg_1624m_363]}>{title}</Text>
                </View>
                <View style={[styles.input_box_E14]}>
                    <Item>
                        <Input
                            style={[styles.tg_1624r_939]}
                            placeholderTextColor={placeholderColor}
                            placeholder={placeholder}
                            getRef={(input) => { this.password = input; }} secureTextEntry
                        />
                    </Item>
                </View>
            </View>

        );
    }
}
