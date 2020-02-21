import React, { Component } from 'react';
import {View, Image, TouchableOpacity, ActivityIndicator,Dimensions, ScrollView} from 'react-native';
import Modal from "react-native-modal";
import {Header, Left, Right, Body, Text, Grid, Col } from 'native-base';
import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";
import Realm from '../../app/src/realm/realm';
import Api from '../src/AppConfig/api';

let notifications = Realm.objects('Notification');
let unRead = 0;
const height = Dimensions.get('window').height;
export default class AppHeaderNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            notifications: {},
            isLoading: true
        };
    }

    async componentDidMount(){
        notifications = Realm.objects('Notification');
        if(notifications.length > 0){
            this.setState({
                notifications: notifications,
                isLoading: false
            });
            this.state.notifications.map((value,key)=>{
                if(!value.checked){
                    unRead += 1;
                }
            });
        }else{
            this.setState({
                isLoading: false
            });
        }
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
                <View>
                    <Header style={{backgroundColor: '#fff'}}>
                        <Left>
                            <TouchableOpacity
                                onPress={() => this.setState({isModalVisible: !this.state.isModalVisible})}>
                                <View style={{paddingTop: 0, paddingLeft: 12}}>
                                    <MyIcon
                                        name={'notification'}
                                        size={24}
                                        color={'#3797DB'}
                                    />
                                </View>
                                <View style={{position: 'absolute', top: 3, right: 0}}>

                                    {/* -- coloca punto encima del icono de notificacion -- */}
                                    {/* -- si no hay notificación se oculta el view -- */}

                                    {this.state.notifications.length > 0 && unRead > 0 && (
                                        <View style={[styles.circulo_notificacion]}/>
                                    )}

                                </View>
                            </TouchableOpacity>
                        </Left>
                        <Body>
                            <View style={[styles.obj_center]}>
                                <Image style={{width: 65, height: 23}} source={require('../assets/logo_meda.png')}/>
                            </View>
                        </Body>
                        <Right/>
                    </Header>

                    <View>
                        <Modal
                            backdropOpacity={0.1}
                            isVisible={this.state.isModalVisible}
                            animationType={'slide'}
                            onBackdropPress={() => this.setState({isModalVisible: false})}
                            style={{ padding: 0, marginLeft: 10, marginRight: 10 }}
                        >
                            <View style={[styles.box_notificacion2, { maxHeight:height - 100, position:'absolute', top:0, left:0, right:0, marginTop:40 }]}>
                                <View style={{position:"absolute", top:-12, left:10}}>
                                    <Image style={{ width:24, height:12 }} source={require('../assets/arrowup.png')} />
                                </View>
                                <View style={[styles.marg_b8,{height:50}]}>
                                    <Grid>
                                        <Col size={85} style={[styles.obj_left]}>
                                            <Text style={[styles.tg_1827u_363]}>Notificaciones</Text>
                                        </Col>
                                        <Col size={15} style={[styles.obj_center]}>
                                            <TouchableOpacity onPress={() => this.setState({isModalVisible: false})} style={{padding:12}}>
                                                <MyIcon
                                                    name={'close'}
                                                    size={16}
                                                    color={'#939393'}
                                                />
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                        {this.notificationRender()}
                                </ScrollView>
                            </View>
                        </Modal>
                    </View>
                </View>
            );
        }
    }

    notificationRender(){
        let notifications = Realm.objects('Notification');
        if(notifications.length > 0) {
            return notifications.map((value,key)=>{
                let id = value.id;
                return (
                    <TouchableOpacity key={key} onPress={()=>this.reader(id)} disabled={value.checked}>
                        <View style={[styles.bordeBottom, styles.pad_t12, styles.flexdir]}>
                            <Grid>
                                <Col size={6} style={[styles.obj_left]}>
                                    <View>
                                        <MyIcon
                                            name={(value.checked ? 'circle_border' : 'circle')}
                                            size={8}
                                            color={'#66DD96'}
                                        />
                                    </View>
                                </Col>
                                <Col size={94}>
                                    <View>
                                        <Text style={[(value.checked ? styles.tg_1216_939 : styles.tg_1216_363)]}>{value.notification}</Text>
                                    </View>
                                </Col>
                            </Grid>
                        </View>
                    </TouchableOpacity>
                )
            })
        }else{
            return (
                <View>
                    <Text>No hay notificaciones por el momento</Text>
                </View>
            )
        }
    }

    reader(id){
        this.setState({isLoading: true});
        let notification = Realm.objects('Notification').filtered('id =' + id);
        let notificationId = notification[0].id;
        Api.readNotification(notificationId,(error,response)=>{
            if(!error){
                this.setState({isLoading: false});
                Realm.write(()=>{
                    notification[0].checked = true;
                });
            }
        });
    }
}
