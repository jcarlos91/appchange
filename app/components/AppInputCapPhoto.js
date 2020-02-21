import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";


export default class AppInputCapPhoto extends Component {

    // modal
    state = {
        isModalVisible: false,
    };

    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });


    render() {

        return (

            <View>

                <View style={[styles.marg_t8, styles.box_f1]}>
                    <TouchableOpacity onPress={this._toggleModal}>
                        <View>
                            <View style={[styles.text_inline_center]}>
                                <View>
                                    <Text style={[styles.tg_1621m_2A9]}>+Añadir foto</Text>
                                </View>
                                <View style={[styles.marg_l8]}>
                                    <MyIcon
                                        name={'camara'}
                                        size={24}
                                        color={'#2A93DF'}
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
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
