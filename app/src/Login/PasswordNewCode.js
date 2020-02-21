import React, { Component } from 'react';
import {View, StatusBar, Image, ActivityIndicator, Keyboard} from 'react-native';
import { Container, Content, Text, Grid, Col } from 'native-base';
import styles from '../../assets/newstyles';
import AppInputPassword from '../../components/AppInputPassword';
import AppButtonIconOn from '../../components/AppButtonIconOn';
import Api from '../AppConfig/api';
import {NavigationActions, StackActions} from 'react-navigation';
import AppButtonSinBorde93 from '../../components/AppButtonSinBorde93';

const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
    ]
});
export default class PasswordNewCode extends Component{
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
            message: '',
            isLoggingIn: false
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

                            {this.state.isLoggingIn && <ActivityIndicator style={styles.marg_t16}/>}

                            {/* --- boton habilitado --- */}
                            <View style={[styles.marg_t40, styles.marg_lr32, styles.marg_b40]}>
                                <AppButtonIconOn
                                    title="Guardar contraseña"
                                    action={()=>this.validPassword()}
                                    disabled={this.state.isLoggingIn}
                                />
                            </View>

                            <View style={[styles.marg_t16, styles.marg_b24]}>
                                <AppButtonSinBorde93
                                    action={() => this.props.navigation.dispatch(resetAction)}
                                    title="Anterior"
                                />
                            </View>

                        </View>

                    </View>

                </Content>

            </Container>
        );
    }


    validPassword(){
        Keyboard.dismiss();
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
            this.changePassword();
        }
    }


    changePassword(){
        this.setState({
            message: '',
            isLoggingIn: true
        },()=>{
            let password = this.state.newPassword;
            let phone = this.state.data.phone;
            let code = this.state.data.code;
            let proceed = false;
            //make call to change password and login
            Api.publicPasswordChange(phone,code,password,(error,response)=>{
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
                    this.setState({message: error.message});
                    this.setState({isLoggingIn: false});
                }
            });
        });
    }
}
