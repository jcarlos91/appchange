import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Grid, Col } from 'native-base';

import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";


export default class AppCard extends Component {

    render() {

        const {campo1, campo2, campo3} = this.props;

        return (

            <View style={[styles.box_container, styles.marg_b8]}>
                <Grid>
                    <Col size={65}>
                        <Text numberOfLines={1} style={[styles.tg_1624m_363]}>{campo1}</Text>
                        <Text numberOfLines={1} style={[styles.tg_1624r_939]}>{campo2}</Text>
                        <Text numberOfLines={1} style={[styles.tg_1624r_939]}>{campo3}</Text>
                    </Col>
                    <Col size={35} style={[styles.obj_right2]}>

                        {/* -- tag nuevo -- */}
{/*
                        <View style={[styles.obj_posLeftTop]}>
                            <View style={[styles.boton_2A9]}>
                                <Text style={[styles.tg_1421m_fff]}>Nuevo</Text>
                            </View>
                        </View>
 */}
                        {/* -- link ver detalle -- */}
                        <View>
                            <TouchableOpacity>
                                <Text style={[styles.tg_1624m_428]}>Ver detalle</Text>
                            </TouchableOpacity>
                        </View>

                    </Col>
                </Grid>
            </View>

        );
    }
}
