import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Grid, Col } from 'native-base';
import Modal from "react-native-modal";
import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";


export default class AppInputModal extends Component {

    // modal
    state = {
        isModalVisible: false,
    };

    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });


    render() {

        const {title, title2} = this.props;

        return (

            <View>
                <View>
                    <Text style={[styles.tg_1624m_363]}>{title}</Text>
                </View>
                <View style={[styles.input_box]}>
                    <Grid style={[styles.pad_tb8 ]}>
                        <Col size={85}>
                            <Text style={[styles.tg_1624r_939, styles.pad_l8]}>{title2}</Text>
                        </Col>
                        <Col size={15} style={[styles.obj_center]}>
                            <TouchableOpacity onPress={this._toggleModal}>
                                <View>
                                    <MyIcon
                                        name={'camara'}
                                        size={20}
                                        color={'#2A93DF'}
                                    />
                                </View>
                            </TouchableOpacity>
                        </Col>
                    </Grid>
                </View>

                {/* --------------- modal foto ----------------- */}

                <View>
                    <Modal isVisible={this.state.isModalVisible} style={styles.modal_bottom1}>
                        <View style={[styles.modalContent]}>

                            <View style={[styles.marg_t16]}>
                                <Text style={[styles.tg_1624m_363, styles.text_center]}>Foto del documento</Text>
                            </View>

                            <View style={[styles.marg_t16]}>
                                <TouchableOpacity full transparent onPress={this._toggleModal}>
                                    <Text style={[styles.tg_1624r]}>Tomar foto</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.marg_t16]}>
                                <TouchableOpacity full transparent onPress={this._toggleModal}>
                                    <Text style={[styles.tg_1624r]}>Remover foto</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.marg_t16]}>
                                <TouchableOpacity full transparent onPress={this._toggleModal}>
                                    <Text style={[styles.tg_1624r_f00]}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>

                {/* fin modal */}
            </View>

        );
    }
}
