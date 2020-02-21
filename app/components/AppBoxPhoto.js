import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Grid, Col } from 'native-base';
import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";
import Realm from '../src/realm/realm';

let agent = Realm.objects('Comercio');
let agentUpdate = [];
export default class AppInput3Fotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.navigation.state.params.data,
            fileName: '',
            image: ''
        }
    }

    componentDidMount(){
        agentUpdate = agent.filtered('id =' + this.state.data.id);
        let type = this.state.data.type;
        if(type === 'termCondition'){
            this.setState({
                fileName: 'terminos_condiciones.jpg',
                image: agentUpdate[0].terminoCondiciones
            });
        }
        else if(type === 'formatRegister'){
            this.setState({
                fileName: 'formato_registro.jpg',
                image: agentUpdate[0].formatoRegistro
            });
        }
        else if(type === 'INE'){
            this.setState({
                fileName: 'ine.jpg',
                image: agentUpdate[0].ine
            });
        }
        else if(type === 'advertisingPhotoInterior'){
            this.setState({
                fileName: 'comercio_interior.jpg',
                image: agentUpdate[0].fotoPublicitariaInterior
            });
        }
        else if(type === 'advertisingPhotoSidewalk'){
            this.setState({
                fileName: 'comercio_pie_banqueta.jpg',
                image: agentUpdate[0].fotoPublicitariaPieBanqueta
            });
        }
        else if(type === 'advertisingPhotoInFront'){
            this.setState({
                fileName: 'comercio_frente.jpg',
                image: agentUpdate[0].fotoPublicitariaAceraEnfrente
            });
        }

    }

    render() {
        return (
            <View>
                <View style={[styles.marg_t8, styles.box_f1]}>
                    <Grid>
                        <Col size={18} style={[styles.obj_left]}>
                            <View>
                                <Image style={{ width:40, height:40 }}
                                       source={{uri: 'data:image/png;base64'+ this.state.image }}
                                />
                            </View>
                        </Col>
                        <Col size={62} style={[styles.obj_left]}>
                            <Text numberOfLines={1} style={[styles.tg_1624r]}>{this.state.fileName}</Text>
                        </Col>
                        <Col size={10} style={[styles.obj_right]}>
                            <TouchableOpacity onPress={()=>this.deletePicture()}>
                                <MyIcon
                                    name={'close'}
                                    size={18}
                                    color={'#939393'}
                                />
                            </TouchableOpacity>
                        </Col>
                    </Grid>
                </View>
            </View>
        );

    }

    deletePicture(){
        let type = this.state.data.type;
        if(type === 'termCondition'){
            agentUpdate.terminoCondiciones = '';
            this.props.navigation.navigate('Pictures');
        }
        else if(type === 'formatRegister'){
            agentUpdate.formatoRegistro = '';
            this.props.navigation.navigate('Pictures');
        }
        else if(type === 'INE'){
            agentUpdate.ine = '';
            this.props.navigation.navigate('Pictures');
        }
        else if(type === 'advertisingPhotoInterior'){
            agentUpdate.fotoPublicitaria = '';
            this.props.navigation.navigate('Pictures');
        }
        else if(type === 'advertisingPhotoSidewalk'){
            agentUpdate.fotoPublicitaria = '';
            this.props.navigation.navigate('Pictures');
        }
        else if(type === 'advertisingPhotoInFront'){
            agentUpdate.fotoPublicitaria = '';
            this.props.navigation.navigate('Pictures');
        }

    }
}
