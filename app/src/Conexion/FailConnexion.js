import React, { Component } from 'react';
import { View, StatusBar, Image, Dimensions } from 'react-native';
import { Container, Content, Text } from 'native-base';
import AppButtonIconOn from '../../components/AppButtonIconOn';
import styles from '../../assets/newstyles';
import Realm from '../realm/realm';
import {NavigationActions, StackActions} from 'react-navigation';
import Utils from '../Utils/Utils';

let prospect = Realm.objects('Prospecto');
let data = {};
const height = Dimensions.get("window").height;
const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Login'}),
    ]
});

const resetActionHome = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
    ]
});
export default class FailConnexion extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: props.navigation.state.params.data,
            showDetail: false
        };
    }

    componentDidMount(){
        prospectUpdate = prospect.filtered('id =' + this.state.data.id);
        if(prospectUpdate.length > 0){
            data = {
                id: prospectUpdate[0].id,
            };
        }
    }

    render() {
        return (
            <Container style={styles.container_f9f}>
                <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
                <Content>
                    <View style={[styles.marg_16, {minHeight:height - 30}]}>
                        <View style={[styles.obj_center, {flex:1}]}>
                            <View style={[styles.obj_center, styles.marg_t100]}>
                                <Image style={{ width:136, height:136 }} source={require('../../assets/img_sinconexion.png')} />
                            </View>
                            <View style={[styles.marg_t32]}>
                                <Text style={[styles.tg_1827u, styles.text_center]}>Ha ocurrido un error</Text>
                            </View>
                            <View style={[styles.marg_16]}>
                                <Text style={[styles.tg_1624r_f00, styles.text_center]}>{this.state.data.errorDetail}</Text>
                            </View>
                        </View>
                        <View style={[styles.pos_FlexBottom, styles.marg_t24, styles.marg_b24]}>
                            <AppButtonIconOn
                                action={()=>this.back()}
                                title="Entendido"
                            />
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }

    back(){
        if(this.state.data.origin === 'login'){
            this.props.navigation.dispatch(resetAction);
        }else if(this.state.data.origin === 'amount'){
            this.props.navigation.navigate('ProspectAmount', {data: data});
        }else {
            this.props.navigation.dispatch(resetActionHome);
        }
    }

    changeInfo(){
        prospectUpdate = prospect.filtered('id =' + this.state.data.id);
        if(prospectUpdate.length > 0){
            data = {
                id: prospectUpdate[0].id,
                origin: 'edit'
            };
        }
        this.props.navigation.navigate('ProspectNew',{data:data});
    }
}
