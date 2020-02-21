import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Grid, Col, Row } from 'native-base';

import styles from "./../assets/newstyles";
import MyIcon from '../icon-font';


export default class AppCardAll extends Component {

    render() {
        const {campo1, campo2, campo3, backTag, titleTag, linkName, linkTagColor, action, campo4, action2, action3, action4 } = this.props;
        return (
            <View style={[styles.box_container]}>
                <Grid>
                    <Row>
                        <Col size={65}>
                            <Text numberOfLines={1} style={[styles.tg_1624m_363]}>{campo1}</Text>
                            <Text numberOfLines={1} style={[styles.tg_1624r_939]}>{campo2}</Text>
                            <Text numberOfLines={1} style={[styles.tg_1624r_939]}>{campo3}</Text>
                            <Text numberOfLines={1} style={[styles.tg_1624r_939]}>{campo4}</Text>
                        </Col>
                        <Col size={35} style={[styles.obj_right]}>
                            <View style={[styles.marg_t24]}>

                                {/* --- tag --- */}
                                <View style={{
                                        backgroundColor:backTag,
                                        height: 24,
                                        borderWidth:0,
                                        borderRadius: 12,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                }}>
                                    <TouchableOpacity onPress={action}>
                                        <Text style={[styles.tg_1220m, {color:linkTagColor}]}>{titleTag}</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* --- link detalle --- */}
                                <View style={[styles.marg_t8]}>
                                <TouchableOpacity onPress={action}>
                                    <Text style={[styles.tg_1421_2A9]}>{linkName}</Text>
                                </TouchableOpacity>

                            </View>
                            </View>
                        </Col>
                    </Row>
                    { titleTag === 'Sin guardar' || titleTag === 'Duplicado'
                        ?
                            <Row style={[styles.marg_t8, styles.pad_t8, {borderTopWidth:2, borderTopColor:'#F0F0F0', borderRadius:3}]}>
                                <Col size={32}>
                                    <TouchableOpacity onPress={action2}>
                                        <View style={[styles.pad_4, styles.obj_center]}>
                                            <Text style={[styles.tg_1621m_2A9]}>Guardar</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Col>
                                <Col size={2} style={{borderRightWidth:2, borderRightColor:'#F0F0F0'}}/>
                                <Col size={32}>
                                    <TouchableOpacity onPress={action3}>
                                        <View style={[styles.pad_4, styles.obj_center]}>
                                            <Text style={[styles.tg_1624r_939]}>Descartar</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Col>
                                {/*<Col size={2} style={{borderRightWidth:2, borderRightColor:'#F0F0F0'}}/>*/}
                                {/*<Col size={32}>*/}
                                {/*    <TouchableOpacity onPress={action4}>*/}
                                {/*        <View style={[styles.pad_4, styles.obj_center]}>*/}
                                {/*            <Text style={[styles.tg_1624r_f00]}>Editar</Text>*/}
                                {/*        </View>*/}
                                {/*    </TouchableOpacity>*/}
                                {/*</Col>*/}
                            </Row>
                        :
                            <View/>
                    }
                </Grid>
            </View>

        );
    }
}
