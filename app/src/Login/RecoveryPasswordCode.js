import React, { Component } from 'react';
import { View, StatusBar, TouchableOpacity, Image, ActivityIndicator, PermissionsAndroid } from 'react-native';
import { Container, Content, Text, Grid, Col, Item, Input } from 'native-base';
import styles from '../../assets/newstyles';
import AppButtonIconOn from '../../components/AppButtonIconOn';
import Api from '../AppConfig/api';
import SmsListener from 'react-native-android-sms-listener';

let code = '';
export default class RecoveryPasswordCode extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: props.navigation.state.params.data,
            disables: true,
            codeOne: '',
            codeTwo: '',
            codeThree: '',
            codeFour: '',
            codeFive: '',
            codeSix: '',
            errorCode: false,
            isSending: false
        };
    }

    componentDidMount(){
    }

    render() {
        return (
            <Container style={styles.container_f9f}>
                <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
                { this.state.errorCode && (
                    <View style={{position:'absolute', top:0, left:0, right:0, zIndex:2}}>
                        <TouchableOpacity onPress={()=>this.setState({errorCode: false})}>
                            <View style={[styles.box_mensaje_fail]}>
                                <Text style={[styles.tg_1624r_f00]}>Código incorrecto</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}

                <Content>
                    <View style={[styles.marg_16]}>
                        <View style={[styles.marg_t48, styles.obj_center]}>
                            <Image style={{ width: 120, height: 42 }} source={require('../../assets/logo_meda.png')} />
                        </View>

                        <View style={[styles.marg_t32, styles.box_fff]}>

                            <View style={[styles.marg_t40]}>
                                <Text style={[styles.tg_1827u_363]}>recuperar tu contraseña</Text>
                            </View>

                            <View style={[styles.marg_t8]}>
                                <Text style={[styles.tg_1624r]}>Te enviamos un SMS. Ingresa el código que viene en el mensaje</Text>
                            </View>

                            <View style={[styles.marg_t48]}>
                                <Text style={[styles.tg_1624m_363]}>Ingresa el código</Text>
                            </View>

                            <View>
                                <Grid>
                                    <Col size={1}>
                                        <View style={[styles.marg_4, styles.pad_b8, (this.state.errorCode === true ? styles.bordeBottom2_e14 : this.state.codeOne !== '' ? styles.bordeBottom2_2a9 : styles.bordeBottom2_e9e), {height:40}]}>
                                            <Item>
                                                <Input
                                                    ref={input => {
                                                        this.code1 = input;
                                                    }}
                                                    style={[styles.tg_1827u_363, styles.text_center]}
                                                    value={this.state.codeOne}
                                                    onChangeText={(code)=>this.focus(1,code)}
                                                    maxLength={1}
                                                    label={"code1"}
                                                    blurOnSubmit={ false }
                                                    onKeyPress={({ nativeEvent }) => {
                                                        this.delete(1, nativeEvent)
                                                    }}
                                                    keyboardType={'phone-pad'}
                                                />
                                            </Item>
                                        </View>
                                    </Col>
                                    <Col size={1}>
                                        <View style={[styles.marg_4, styles.pad_b8, (this.state.errorCode === true ? styles.bordeBottom2_e14 : this.state.codeTwo !== '' ? styles.bordeBottom2_2a9 : styles.bordeBottom2_e9e), {height:40}]}>
                                            <Item>
                                                <Input
                                                    ref={input => {
                                                        this.code2 = input;
                                                    }}
                                                    label={"code2"}
                                                    style={[styles.tg_1827u_363, styles.text_center]}
                                                    value={this.state.codeTwo}
                                                    onChangeText={(code)=>this.focus(2,code)}
                                                    maxLength={1}
                                                    onKeyPress={({ nativeEvent }) => {
                                                        this.delete(2, nativeEvent)
                                                    }}
                                                    keyboardType={'phone-pad'}
                                                />
                                            </Item>
                                        </View>
                                    </Col>
                                    <Col size={1}>
                                        <View style={[styles.marg_4, styles.pad_b8,(this.state.errorCode === true ? styles.bordeBottom2_e14 : this.state.codeThree !== '' ? styles.bordeBottom2_2a9 : styles.bordeBottom2_e9e), {height:40}]}>
                                            <Item>
                                                <Input
                                                    ref={input => {
                                                        this.code3 = input;
                                                    }}
                                                    label={"code3"}
                                                    style={[styles.tg_1827u_363, styles.text_center]}
                                                    value={this.state.codeThree}
                                                    onChangeText={(code)=>this.focus(3,code)}
                                                    maxLength={1}
                                                    onKeyPress={({ nativeEvent }) => {
                                                        this.delete(3, nativeEvent)
                                                    }}
                                                    keyboardType={'phone-pad'}
                                                />
                                            </Item>
                                        </View>
                                    </Col>
                                    <Col size={1}>
                                        <View style={[styles.marg_4, styles.pad_b8, (this.state.errorCode === true ? styles.bordeBottom2_e14 : this.state.codeFour !== '' ? styles.bordeBottom2_2a9 : styles.bordeBottom2_e9e), {height:40}]}>
                                            <Item>
                                                <Input
                                                    ref={input => {
                                                        this.code4 = input;
                                                    }}
                                                    label={"code4"}
                                                    style={[styles.tg_1827u_363, styles.text_center]}
                                                    value={this.state.codeFour}
                                                    onChangeText={(code)=>this.focus(4,code)}
                                                    maxLength={1}
                                                    onKeyPress={({ nativeEvent }) => {
                                                        this.delete(4, nativeEvent)
                                                    }}
                                                    keyboardType={'phone-pad'}
                                                />
                                            </Item>
                                        </View>
                                    </Col>
                                    <Col size={1}>
                                        <View style={[styles.marg_4, styles.pad_b8, (this.state.errorCode === true ? styles.bordeBottom2_e14 : this.state.codeFive !== '' ? styles.bordeBottom2_2a9 : styles.bordeBottom2_e9e), {height:40}]}>
                                            <Item>
                                                <Input
                                                    ref={input => {
                                                        this.code5 = input;
                                                    }}
                                                    label={"code5"}
                                                    style={[styles.tg_1827u_363, styles.text_center]}
                                                    value={this.state.codeFive}
                                                    onChangeText={(code)=>this.focus(5,code)}
                                                    maxLength={1}
                                                    onKeyPress={({ nativeEvent }) => {
                                                        this.delete(5,nativeEvent)
                                                    }}
                                                    keyboardType={'phone-pad'}
                                                />
                                            </Item>
                                        </View>
                                    </Col>
                                    <Col size={1}>
                                        <View style={[styles.marg_4, styles.pad_b8, (this.state.errorCode === true ? styles.bordeBottom2_e14 : this.state.codeSix !== '' ? styles.bordeBottom2_2a9 : styles.bordeBottom2_e9e), {height:40}]}>
                                            <Item>
                                                <Input
                                                    ref={input => {
                                                        this.code6 = input;
                                                    }}
                                                    label={"code6"}
                                                    style={[styles.tg_1827u_363, styles.text_center]}
                                                    value={this.state.codeSix}
                                                    onChangeText={(code)=>this.focus(6, code )}
                                                    maxLength={1}
                                                    onKeyPress={({ nativeEvent }) => {
                                                        this.delete(6, nativeEvent)
                                                    }}
                                                    keyboardType={'phone-pad'}
                                                />
                                            </Item>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>

                            <View style={[styles.marg_t24]}>
                                <TouchableOpacity onPress={()=>this.sendCodeAgain()}>
                                    <Text style={[styles.tg_1421_2A9]}>Enviar el código nuevamente</Text>
                                </TouchableOpacity>
                            </View>

                            {this.state.isSending && <ActivityIndicator style={[styles.marg_t16]}/>}

                            {this.state.errorCode && (
                                <View>
                                    <View style={[styles.marg_t8, styles.pad_l4]}>
                                        <Text style={[styles.tg_1624r_e14]}>Verifica el código en tus mensajes</Text>
                                    </View>
                                </View>
                            )}

                            <View style={[styles.marg_t100, styles.marg_lr32]}>
                                <AppButtonIconOn
                                    title="Continuar"
                                    disabled={
                                        !this.state.codeOne ||
                                        !this.state.codeTwo ||
                                        !this.state.codeThree ||
                                        !this.state.codeFour ||
                                        !this.state.codeFive ||
                                        !this.state.codeSix ||
                                        this.state.isSending
                                    }
                                    action={()=>this.validCode()}
                                />
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }

    focus(index, value){
        if(index === 1){
            this.setState({codeOne: value});
            if(value !== '') {
                this.code2._root.focus();
            }
        }else if(index === 2){
            this.setState({codeTwo: value});
            if(value !== '') {
                this.code3._root.focus();
            }
        }else if(index === 3){
            this.setState({codeThree: value});
            if(value !== '') {
                this.code4._root.focus();
            }
        }else if(index === 4){
            this.setState({codeFour: value});
            if(value !== '') {
                this.code5._root.focus();
            }
        }else if(index === 5){
            this.setState({codeFive: value});
            if(value !== '') {
                this.code6._root.focus();
            }
        }else if(index === 6){
            this.setState({codeSix: value});
        }
    }

    delete(index, keyPress){
        this.setState({errorCode: false});
        if(keyPress.key === 'Backspace') {
            if (index === 1) {
                this.setState({codeOne: ''});
            } else if (index === 2) {
                this.setState({codeTwo: ''});
                this.code1._root.focus();
            } else if (index === 3) {
                this.setState({codeThree: ''});
                this.code2._root.focus();
            } else if (index === 4) {
                this.setState({codeFour: ''});
                this.code3._root.focus();
            } else if (index === 5) {
                this.setState({codeFive: ''});
                this.code4._root.focus();
            } else if (index === 6) {
                this.setState({codeSix: ''});
                this.code5._root.focus();
            }
        }
    }

    async sendCodeAgain(){
        let phone = this.state.data.phone;
        this.setState({isSending: true});
        await Api.getPhoneCode(phone,(error,response)=>{
            if(!error){
                this.props.navigation.navigate('RecoveryPasswordCode');
                this.setState({isSending: false});
            }
        });
    }

    async validCode(){
        this.setState({isSending: true});
        let phone = this.state.data.phone;
        let code = this.state.codeOne + this.state.codeTwo + this.state.codeThree + this.state.codeFour + this.state.codeFive + this.state.codeSix;
        await Api.validCode(code,phone,(error,response)=>{
            if(!error){
                let data = { phone: phone, code: code };
                this.setState({ isSending: false });
                this.props.navigation.navigate('PasswordNewCode', {data: data});
            }else{
                this.setState({
                    errorCode: true,
                    isSending: false
                });
            }
        });
    }

}
