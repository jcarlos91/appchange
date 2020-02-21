import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Item } from 'native-base';
import styles from "./../assets/newstyles";


export default class AppInputText extends Component {

    render() {
        const {title, titleOpc,  placeholder, placeholderColor, value, onChangeText, onEndEditing, keyboardType, autoCapitalize, maxLength, txtError, onKeyPress } = this.props;
        return (
            <View>
                <View>
                    <Text style={[styles.tg_1624m_363]}>{title} <Text style={[styles.tg_1624r_939]}>{titleOpc}</Text></Text>
                </View>
                <View style={[(txtError === '' ? styles.input_box : styles.input_box_E14)]}>
                    <Item>
                        <Input
                            style={[(styles.tg_1624r_939)]}
                            placeholderTextColor={placeholderColor}
                            placeholder={placeholder}
                            value={value}
                            onChangeText={onChangeText}
                            onEndEditing={onEndEditing}
                            keyboardType={ (keyboardType ? keyboardType : 'default') }
                            autoCapitalize={ (autoCapitalize ? autoCapitalize :'sentences')}
                            maxLength={maxLength}
                            onKeyPress={onKeyPress}
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
