import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, Input, Item, Grid, Col } from 'native-base';
import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";


export default class AppInputSearch extends Component {

    render() {

        const {title, placeholder, placeholderColor, value, onChangeText, onEndEditing } = this.props;

        return (

            <View>
                <View>
                    <Text style={[styles.tg_1624m_363]}>{title}</Text>
                </View>
                <View style={[styles.input_box]}>
                    <Grid style={[styles.pad_tb8 ]}>
                        <Col size={100}>
                            <Item>
                                <Input
                                    style={[styles.tg_1624r_939]}
                                    placeholderTextColor={placeholderColor}
                                    placeholder={placeholder}
                                    value={value}
                                    onChangeText={onChangeText}
                                    onEndEditing={onEndEditing}
                                />
                            </Item>
                        </Col>
                    </Grid>
                </View>

            </View>

        );
    }
}
