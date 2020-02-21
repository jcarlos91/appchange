import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Text, View } from 'native-base';

import DatePicker from 'react-native-datepicker'

import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";

export default class AppDatePicker extends Component {

    constructor (props) {
        super(props);
        this.state = {
            startDate: ''

            // Enable this if you want todays date to appear by default
            // startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }


    render() {

        const { width, height } = Dimensions.get('window');
        const { title, titleOpc, date, onDateChange } = this.props;

        return (

            <View>
                <View>
                    <View>
                        <Text style={[styles.tg_1624m_363]}>{title} <Text style={[styles.tg_1624r_939]}>{titleOpc}</Text></Text>
                    </View>

                    <View style={[styles.input_box]}>
                        <DatePicker
                            style={{width:width - 50}}
                            date={date}
                            showIcon={false}
                            mode="date"
                            placeholder="Seleccionar fecha"
                            format="DD/MM/YYYY"
                            confirmBtnText="Confirmar"
                            cancelBtnText="Cancelar"
                            customStyles={{
                                dateInput: {
                                    marginLeft: 0,
                                    borderWidth:0,
                                    paddingLeft:8,
                                    justifyContent:'center',
                                    alignItems: 'flex-start'
                                },
                                dateText: {
                                    fontFamily:'WorkSans-Regular',
                                    fontSize:16,
                                    color:'#363636'
                                },
                                placeholderText: {
                                    fontSize: 16,
                                    color: '#939393'
                                }
                            }}
                            onDateChange={onDateChange}
                        />
                        <View style={{position:'absolute', marginTop:24, right:16}}>
                            <MyIcon
                                name={'arrowdown'}
                                size={12}
                                color={'#000'}
                            />
                        </View>

                    </View>

                </View>
            </View>

        );
    }
}
