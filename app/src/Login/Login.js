import React, { Component } from 'react';
import {View, StatusBar, Keyboard, ActivityIndicator, Vibration, Image } from 'react-native';
import { Container, Content, Text, Grid, Col } from 'native-base';
import AppInputText from '../../components/AppInputText';
import styles from '../../assets/newstyles';
import AppInputPassword from '../../components/AppInputPassword';
import AppButtonIconOn from '../../components/AppButtonIconOn';
import Api from '../AppConfig/api';
import { NavigationActions, StackActions } from 'react-navigation';
import OAuth from '../AppConfig/oauthManager';
import Realm from '../realm/realm';

const DURATION = 1000;
const config = Realm.objects('Config');
const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
    ]
});
const resetActionPrincipal = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Principal'}),
    ]
});
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            errorUserName: '',
            errorPassword: '',
            isLoggingIn: false,
            message: '',
        }
    }

    async componentDidMount(){
        if(OAuth.isAuth()) {
            this.props.navigation.dispatch(resetAction);
        }
    }

    render(){
        return (
            <Container style={styles.container_f9f}>
                <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
                <Content>
                    <View style={[styles.marg_16]}>
                        <View style={[styles.image]}>
                            <Image style={{width: 200, height: 100}} source={require('../../assets/logo.png')}/>
                        </View>

                        <View style={[styles.marg_t32, styles.box_fff]}>

                            <View style={[styles.marg_t40]}>
                                <Text style={[styles.tg_1827u_363, styles.text_center]}>BIENVENIDO, <Text style={[styles.tg_1827u_939]}>INICIA SESIÓN</Text></Text>
                            </View>
                            <View style={[styles.marg_t24]}>
                                <AppInputText
                                    title="Usuario"
                                    placeholder="Ingresa tu usuario"
                                    placeholderColor={'#939393'}
                                    onChangeText={(user)=>this.setState({
                                        user : user,
                                        errorUserName: '',
                                        message: ''
                                    })}
                                    txtError={this.state.errorUserName}
                                />
                            </View>
                            <View style={[styles.marg_t24]}>
                                <AppInputPassword
                                    title="Contraseña"
                                    placeholder="Ingresa tu contraseña"
                                    placeholderColor={'#939393'}
                                    onChangeText={(password)=>this.setState({
                                        password: password,
                                        errorPassword: '',
                                        message: ''
                                    })}
                                    txtError={this.state.errorPassword}
                                />
                            </View>

                            <View style={styles.marg_t32}/>

                            {!!this.state.message && (
                                <View style={{justifyContent: 'center', alignItems: 'center', marginTop:20}}>
                                    <Text
                                        style={styles.input_error}>
                                        {this.state.message}
                                    </Text>
                                </View>
                            )}
                            {this.state.isLoggingIn && <ActivityIndicator color={styles.blue}/>}

                            <View style={[styles.marg_t24, styles.marg_lr32, styles.marg_b40]}>
                                <AppButtonIconOn
                                    title="Iniciar sesión"
                                    action={()=>this.Login()}
                                    color={styles.blue}
                                    disabled={this.state.isLoggingIn}
                                />
                                <View style={[styles.marg_t24]}/>
                                <AppButtonIconOn
                                    action={() => this.props.navigation.dispatch(resetActionPrincipal)}
                                    title="Cancelar"
                                    disabled={this.state.isSaving}
                                    color={styles.grey}
                                />
                            </View>

                        </View>
                    </View>
                </Content>
            </Container>
        )
    }


    Login() {
        Keyboard.dismiss();
        let userName = this.state.user;
        let password = this.state.password;
        let proceed = false;
        let valid = true;
        this.setState({
            message: '',
            isLoggingIn: true
        });
        if(userName === '' ){
            this.setState({
                errorUserName: 'Ingresa tu usuario',
                isLoggingIn: false
            });
            valid = false;
            Vibration.vibrate(DURATION);
        }

        if(password === ''){
            this.setState({
                errorPassword: 'Ingresa tu password',
                isLoggingIn: false
            });
            valid = false;
            Vibration.vibrate(DURATION);
        }

        if(valid) {
            this.setState({isLoggingIn: true, message: ''});
            Api.login(userName, password, (error, access_token) => {
                if (error) {
                    Vibration.vibrate(DURATION);
                    if (error.message === 'The user credentials were incorrect.') {
                        this.setState({message: 'Credenciales inválidas'});
                        this.setState({isLoggingIn: false});
                    }else if (error.message === 'Invalid username and password combination') {
                        this.setState({message: 'Credenciales inválidas'});
                        this.setState({isLoggingIn: false});
                    }else if (error.message === 'JSON Parse error: Unexpected identifier "Tunnel"'){
                        this.setState({message: 'Hubo un error con el servidor, intente mas tarde.'});
                        this.setState({isLoggingIn: false});
                    }else if (error.message === "JSON Parse error: Unrecognized token '<'"){
                        this.setState({message: 'Hubo un error con el servidor, intente mas tarde.'});
                        this.setState({isLoggingIn: false});
                    }else{
                        this.setState({message: error.message});
                        this.setState({isLoggingIn: false});
                    }
                }
                if (access_token) {
                    proceed = true;
                    if (proceed) {
                        Realm.write(()=>{
                            Realm.create('Config',{
                                isUser: true
                            });
                        });
                        this.setState({isLoggingIn: true});
                        this.props.navigation.dispatch(resetAction);
                    }
                }
            });
        }
    }

}
