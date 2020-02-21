import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Grid, Col } from 'native-base';

import CheckBox from 'react-native-check-box';

import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";


export default class AppCheckMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            one: false
        };
    }

    render() {
        const {title, isChecked, onClick} = this.props;
        return (
            <View style={[styles.box_f1]}>
                <Grid>
                    <Col size={85} style={[styles.obj_left]}>
                        <View>
                            <Text style={[styles.tg_1624r]}>{title}</Text>
                        </View>
                    </Col>
                    <Col size={15} style={{justifyContent:"center"}}>
                        <View style={{alignItems:"center"}}>
                            <CheckBox
                                style={{flex: 1}}
                                onClick={onClick}
                                isChecked={isChecked}
                                checkedImage={
                                    <MyIcon
                                        name={'checkbox_on'}
                                        size={24}
                                        color={'#43C778'}
                                    />
                                }
                                unCheckedImage={
                                    <MyIcon
                                        name={'checkbox_off'}
                                        size={24}
                                        color={'#939393'}
                                    />
                                }
                            />
                        </View>
                    </Col>
                </Grid>
            </View>

        );
    }
}
