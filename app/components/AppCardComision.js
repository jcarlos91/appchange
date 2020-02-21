import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Grid, Col } from 'native-base';
import styles from "./../assets/newstyles";


export default class AppCardComision extends Component {

    render() {

        const { campo1, campo2, backTag, titleTag, linkName, linkTagColor} = this.props;

        return (

            <View style={[styles.box_container, styles.marg_b8]}>
                <Grid>
                    <Col size={65}>
                        <Text numberOfLines={1} style={[styles.tg_1624m_363]}>{campo1}</Text>
                        <Text numberOfLines={1} style={[styles.tg_1624r_939]}>{campo2}</Text>
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
                                <Text style={[styles.tg_1220m, {color:linkTagColor}]}>{titleTag}</Text>
                            </View>

                        </View>
                    </Col>
                </Grid>
            </View>

        );
    }
}
