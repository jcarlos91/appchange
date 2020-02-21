import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Item } from 'native-base';
import styles from "./../assets/newstyles";


export default class AppInputPassword extends Component {

    render() {

        const {title, placeholder, placeholderColor, value, onChangeText, error, txtError } = this.props;

        return (

            <View>
                <View>
                    <Text style={[styles.tg_1624m_363]}>{title}</Text>
                </View>
                <View style={[(txtError ? styles.input_box_E14 :styles.input_box)]}>
                    <Item>
                        <Input
                            style={[styles.tg_1624r_939]}
                            placeholderTextColor={placeholderColor}
                            placeholder={placeholder}
                            getRef={(input) => { this.password = input; }} secureTextEntry
                            value={value}
                            onChangeText={onChangeText}
                        />
                    </Item>
                </View>
                <View>
                    <Text style={[styles.input_error]}>{txtError}</Text>
                </View>
            </View>

        );
    }
}
