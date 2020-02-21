import React, { Component } from 'react';
import { View, TouchableOpacity, StatusBar, ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import { Container, Content, Text, Grid, Col } from 'native-base';
import AppHeader from '../../components/AppHeader';
import styles from '../../assets/newstyles';
import Oauth from '../AppConfig/oauthManager';
import {NavigationActions, StackActions} from 'react-navigation';
import Realm from '../realm/realm';
import Api from '../AppConfig/api';
import Utils from '../Utils/Utils';

export default class Account extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            supervisorName: '',
            phoneNumberSupervisor: '',
            nameAffiliate: '',
            birthday: '',
            rfc: '',
            rol: '',
            outsourcing: '',
            state: '',
            municipality: '',
            delegation: '',
            celPhone: '',
            email: '',
            nameReference: '',
            phoneReference: ''
        }
    }

    async _onRefresh() {
        this.setState({
            indicator: true,
            mostrar: false,
            refreshing: true,
        });
        this.getProfileData();
        this.getData();
    }

    async componentDidMount(){
        await this.getProfileData();
    }


    render() {
        if(this.state.isLoading){
            return (
                <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}} >
                    <ActivityIndicator size='large' color='#3797DB' />
                </View>
            )
        }else {
            return (
                <Container style={styles.container_f9f}>

                    <AppHeader {...this.props} />
                    <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
                    <ScrollView
                        horizontal={false}
                        refreshControl={
                            <RefreshControl
                                colors={["#3797DB", "#3797DB"]}
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                            />
                        }
                    >

                        <Content>

                            <View style={[styles.marg_16]}>

                                <View style={[styles.marg_t8]}>
                                    <Text style={[styles.tg_1827u_363]}>Tu perfil</Text>
                                </View>


                                <View style={[styles.marg_t24]}>
                                    <Text style={[styles.tg_1627b_363, styles.textUppercase]}>Datos</Text>
                                </View>

                                <View style={[styles.marg_t16]}>
                                    <Text style={[styles.tg_1624m_363]}>Nombre completo</Text>
                                    <Text style={[styles.tg_1624r_363]}>{this.state.name} {this.state.lastName } { this.state.lastName2 }</Text>
                                </View>


                                <View style={[styles.marg_t16]}>
                                    <Text style={[styles.tg_1624m_363]}>Fecha de Nacimiento</Text>
                                    <Text style={[styles.tg_1624r_363]}>{this.state.birthday}</Text>
                                </View>

                                <View style={[styles.marg_t16]}>
                                    <Text style={[styles.tg_1624m_363]}>Teléfono celular</Text>
                                    <Text style={[styles.tg_1624r_363]}>{this.state.celPhone}</Text>
                                </View>

                                <View style={[styles.marg_t16]}>
                                    <Text style={[styles.tg_1624m_363]}>Correo</Text>
                                    <Text style={[styles.tg_1624r_363]}>{this.state.email}</Text>
                                </View>

                                <View style={[styles.marg_t24, styles.marg_b16, styles.obj_center]}>
                                    <Text style={[styles.tg_1621m_2A9]}/>
                                </View>
                            </View>
                            <View style={[styles.marg_t24, styles.marg_b16, styles.obj_center]}>
                                <TouchableOpacity onPress={() => this.logout()}>
                                    <Text style={[styles.tg_1624r_e14]}>Cerrar sesión</Text>
                                </TouchableOpacity>
                            </View>
                        </Content>
                    </ScrollView>
                </Container>
            );
        }
    }

    async getProfileData(){
        await Api.profileInfo((error,response)=>{
            if(!error){
                let profile = response.profile;
                Realm.write(()=>{
                    Realm.delete(Realm.objects('Profile'));
                });
                Realm.write(()=>{
                    Realm.create('Profile',{
                        name: profile.name,
                        lastName: profile.lastName,
                        lastName2: profile.lastName2,
                        email: profile.email,
                        cellphone: profile.cellphone,
                        birthday: profile.birthday
                    });
                });
                this.setState({refreshing: false});
                this.getData();
            }else{
                Utils.createMessage(
                    'danger',
                    'Profile Error',
                    error.message
                );
                this.forceUpdate();
                this.setState({refreshing: false});
            }
        });
    }

    async getData(){
        let account = Realm.objects('Profile');
        if(account.length > 0) {
            await this.setState({
                name: account[0].name,
                lastName: account[0].lastName,
                lastName2: account[0].lastName2,
                birthday: account[0].birthday,
                celPhone: account[0].cellphone,
                email: account[0].email,
                isLoading: false
            });
        }else{
            this.setState({isLoading: false});
        }
    }

    logout(){
        Oauth.logout().then(()=>{
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Principal'}),
                ]
            });
            this.props.navigation.dispatch(resetAction);
        });
    }
}
