import React, { Component } from 'react';
import {View, StatusBar, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import { Container, Content, Text, Grid, Col } from 'native-base';
import styles from '../../assets/newstyles';
import AppInputPassword from '../../components/AppInputPassword';
import AppButtonIconOn from '../../components/AppButtonIconOn';
import Modal from "react-native-modal";
import AppButtonIconCancel from '../../components/AppButtonIconCancel';
import Api from '../AppConfig/api';
import {NavigationActions, StackActions} from 'react-navigation';

const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
    ]
});
export default class PasswordNew extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: props.navigation.state.params.data,
            newPassword: '',
            newPasswordConfirm: '',
            errorPassword: false,
            disabledButton: true,
            isModalVisible: false,
            errorPolitiesBool: false,
            errorPolities: '',
            errorPasswordText: '',
            message: ''
        }
    }

    componentDidMount(){
    }


    render() {
        return (
            <Container style={styles.container_f9f}>
                <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />

                <Content>

                    <View style={[styles.marg_16]}>

                        <View style={[styles.marg_t48, styles.obj_center]}>
                            <Image style={{ width: 120, height: 42 }} source={require('../../assets/logo_meda.png')} />
                        </View>
                        {this.state.errorPassword && (
                            <View style={[styles.marg_t24, styles.box_mensaje_fail]}>
                                <Text style={[styles.tg_1624r_f00]}>{this.state.errorPasswordText}</Text>
                            </View>
                        )}

                        {this.state.errorPolitiesBool && (
                            <View style={[styles.marg_t24, styles.box_mensaje_fail]}>
                                <Text style={[styles.tg_1624r_f00]}>{this.state.errorPolities}</Text>
                            </View>
                        )}

                        <View style={[styles.marg_t32, styles.box_fff]}>

                            <View style={[styles.marg_t40]}>
                                <Text style={[styles.tg_1827u_363, styles.text_left]}>Nueva contraseña</Text>
                            </View>
                            <View style={[styles.marg_t8]}>
                                <Text style={[styles.tg_1624r]}>Por tu seguridad, define una nueva contraseña con más de 8 letras o números</Text>
                            </View>
                            <View style={[styles.marg_t32]}>
                                <AppInputPassword
                                    title="Contraseña nueva"
                                    placeholder="Ingresa tu nueva contraseña"
                                    placeholderColor={'#939393'}
                                    value={this.state.newPassword}
                                    onChangeText={(password)=>this.setState({ newPassword: password,errorPassword: false })}
                                    error={this.state.errorPassword}
                                />
                            </View>
                            <View style={[styles.marg_t24]}>
                                <AppInputPassword
                                    title="Confirma contraseña nueva"
                                    placeholder="Ingresa tu contraseña nuevamente"
                                    placeholderColor={'#939393'}
                                    value={this.state.newPasswordConfirm}
                                    onChangeText={(password)=>this.setState({newPasswordConfirm: password,errorPassword: false})}
                                    error={this.state.errorPassword}
                                />
                            </View>

                            {!!this.state.message && (
                                <View style={{justifyContent: 'center', alignItems: 'center', marginTop:10}}>
                                    <Text
                                        style={styles.input_error}>
                                        {this.state.message}
                                    </Text>
                                </View>
                            )}
                            {this.state.isLoggingIn && <ActivityIndicator/>}

                            {/* --- boton habilitado --- */}
                            <View style={[styles.marg_t40, styles.marg_lr32, styles.marg_b40]}>
                                <AppButtonIconOn
                                    title="Guardar contraseña"
                                    action={()=>this.validPassword()}
                                />
                            </View>

                            <View>
                                <Modal
                                    isVisible={this.state.isModalVisible}
                                    backdropOpacity={0.2}
                                    style={{
                                        marginTop:30,
                                        borderRadius:4,
                                        backgroundColor:'#fff',
                                        borderWidth:1,
                                        borderColor:'#f2f2f2',
                                        shadowColor:"#000",
                                        shadowOffset: { width:0, height:2 },
                                        shadowOpacity: 0.2,
                                        elevation: 3,
                                    }}
                                >


                                    <View style={[styles.pad_24]}>

                                        <View style={[styles.obj_center]}>
                                            <Image style={{ width:82, height:82 }} source={require('../../assets/img_lectura.png')} />
                                        </View>
                                        <View style={[styles.marg_t32]}>
                                            <Text style={[styles.tg_1827u_363, styles.text_center]}>Antes de continuar</Text>
                                        </View>
                                        <View style={[styles.marg_t8]}>
                                            <Text style={[styles.tg_1624r_939, styles.text_center]}>Lee y acepta las políticas de privacidad así como los términos y  condiciones </Text>
                                        </View>
                                        <View style={[styles.marg_t24, styles.obj_center]}>
                                            <TouchableOpacity onPress={()=> this.call('Policies')}>
                                                <Text style={[styles.tg_1421_2A9]}>Leer políticas de privacidad</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[styles.marg_t16, styles.obj_center]}>
                                            <TouchableOpacity onPress={()=>this.call('Terms')}>
                                                <Text style={[styles.tg_1421_2A9]}>Leer términos y cóndiciones</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={[styles.marg_t48, styles.marg_lr32]}>
                                            <AppButtonIconOn
                                                action={()=>this.changePassword()}
                                                title="Aceptar para continuar"
                                            />
                                        </View>

                                        <View style={[styles.marg_t8, styles.marg_lr32]}>
                                            <AppButtonIconCancel
                                                action={()=>this.dontAcceptPolities()}
                                                title="No acepto"
                                            />
                                        </View>

                                    </View>

                                </Modal>
                            </View>

                        </View>

                    </View>

                </Content>

            </Container>
        );
    }


    call(type){
        if(type === 'Policies'){
            this.setState({isModalVisible: !this.state.isModalVisible});
            this.props.navigation.navigate('PrivacyPolicies');
        }else if(type === 'Terms'){
            this.setState({isModalVisible: !this.state.isModalVisible});
            this.props.navigation.navigate('TermAndConditions');
        }
    }

    dontAcceptPolities(){
        this.setState({
            errorPolities: 'Para continuar necesitas aceptar los términos y cóndiciones',
            errorPolitiesBool: true,
            isModalVisible: !this.state.isModalVisible
        });
    }

    validPassword(){
        let password = this.state.newPassword;
        let passwordNew = this.state.newPasswordConfirm;

        if(password !== passwordNew ){
            this.setState({
                errorPassword: true,
                errorPasswordText: 'No coinciden las contraseñas'
            });
        }else if(password === '' || passwordNew === ''){
            this.setState({
                errorPassword: true,
                errorPasswordText: 'Teclea una contraseña valida'
            });
        }else{
            this.setState({isModalVisible: !this.state.isModalVisible});
        }
    }


    changePassword(){
        this.setState({
            isModalVisible: !this.state.isModalVisible,
            message: '',
            isLoggingIn: true
        },()=>{
            let password = this.state.newPassword;
            let phone = this.state.data.phone;
            let code = this.state.data.code;
            let proceed = false;
            this.props.navigation.dispatch(resetAction);
            // make call to change password and login
            Api.changePassword(code,password,(error,response)=>{
                if(!error){
                    Api.login(phone,password,(error,access_token)=>{
                        if(error){
                            if (error.message === 'The user credentials were incorrect.') {
                                this.setState({message: 'Credenciales inválidas'});
                                this.setState({isLoggingIn: false});
                            }else if (error.message === 'JSON Parse error: Unexpected identifier "Tunnel"'){
                                this.setState({message: 'Hubo un error con el servidor, intente mas tarde.'});
                                this.setState({isLoggingIn: false});
                            }else if (error.message === "JSON Parse error: Unrecognized token '<'"){
                                this.setState({message: 'Hubo un error con el servidor, intente mas tarde.'});
                                this.setState({isLoggingIn: false});
                            }else {
                                this.setState({message: error.message});
                                this.setState({isLoggingIn: false});
                            }
                        }
                        if(access_token){
                            proceed = true;
                        }
                        if(proceed){
                            this.setState({isLoggingIn: true});
                            this.props.navigation.dispatch(resetAction);
                        }
                    })
                }else{
                    let data = {
                        id:0,
                        origin: 'login',
                        errorDetail: error.message
                    };
                    this.props.navigation.navigate('FailConnexion',{ data:data });
                    this.setState({isLoggingIn: false});
                }
            });
        });
    }
}
