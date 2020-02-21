import React, { Component } from 'react';
import {View, ActivityIndicator, StatusBar, TouchableOpacity, Dimensions, Image } from 'react-native';
import {Container, Content, Text, Grid, Col, Left, Body, Right, Header } from 'native-base';
import styles from '../../assets/newstyles';
import AppInputText from '../../components/AppInputText';
import AppButtonIconOn from '../../components/AppButtonIconOn';
import DatePicker from 'react-native-datepicker';
import {NavigationActions, StackActions} from 'react-navigation';
import Api from '../AppConfig/api';
import Utils from '../Utils/Utils';
import Realm from '../realm/realm';
import AppHeader from '../../components/AppHeader';
import AppTextArea from '../../components/AppTextArea';

const width = Dimensions.get('window').width - 30;
const resetAction = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Principal'}),
  ]
});

export default class Invited extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            nameEvent: '',
            nameInvited: '',
            email: '',
            date: '',
            description: '',
            cellphone: '',
            errorEvent: '',
            errorInvited: '',
            errorDate: '',
            errorEmail: '',
            errorDescription: '',
            errorCellphone: ''
        }
    }


  componentDidMount(){
      this.setState({isLoading: false});
  }

  render() {
      const { date } = this.state;
      const { onClose, onChange } = this.props;
      if(this.state.isLoading){
          return (
              <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}} >
                  <ActivityIndicator size='large' color='#3797DB' />
              </View>
          )
      }else {
      return (
          <Container style={styles.container_f9f} onPress={onClose}>
              <AppHeader {...this.props} />
              <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content"/>
              <Content>
                  <View style={[styles.marg_16]}>
                      <View style={[styles.marg_t32]}>
                          <Grid>
                              <Col size={75} style={[styles.obj_left]}>
                                  <Text style={[styles.tg_1827u_363]}>Nuevo registro invitado</Text>
                              </Col>
                          </Grid>
                      </View>
                      <View style={[styles.marg_t24]}>
                          <AppInputText
                              label={"name"}
                              title="Nombre del evento*"
                              value={this.state.nameEvent}
                              onChangeText={(text) => this.setState({
                                  nameEvent: text,
                                  errorEvent: ''
                              })}
                              txtError={this.state.errorEvent}
                          />
                      </View>

                      <View style={[styles.marg_t24]}>
                          <AppInputText
                              // ref={input => { this.lastName = input; }}
                              label={"lastName"}
                              title="Nombre completo del solicitante*"
                              value={this.state.nameInvited }
                              onChangeText={(text) => this.setState({
                                  nameInvited: text,
                                  errorInvited: ''
                              })}
                              txtError={this.state.errorInvited}
                          />
                      </View>

                      <View style={[styles.marg_t24]}>
                          <AppInputText
                              // ref={input => { this.mothersLastName = input; }}
                              label={"email"}
                              title="Email*"
                              value={this.state.email}
                              onChangeText={(text) => this.setState({
                                  email: text,
                                  errorEmail: ''
                              })}
                              txtError={this.state.errorEmail}
                              keyboardType={'email-address'}
                              onEndEditing={() => this.emailValid(this.state.email)}
                          />
                      </View>

                      <View style={[styles.marg_t24]}>
                          <AppInputText
                              label={"cellphone"}
                              title="Número de celular*"
                              keyboardType={'number-pad'}
                              maxLength={10}
                              value={this.state.cellphone}
                              onChangeText={(text) => this.setState({
                                  cellphone: text,
                                  errorCellphone: ''
                              })}
                              txtError={this.state.errorCellphone}
                          />
                      </View>

                      <View style={[styles.marg_t24]}>
                          <View>
                              <Text style={[styles.tg_1624m_363]}>Fecha del evento* <Text style={[styles.tg_1624r_939]}/></Text>
                          </View>
                          <DatePicker
                              style={{width: width, backgroundColor: '#f6f6f6', color: '#939393'}}
                              date={this.state.date}
                              mode="date"
                              placeholder="Seleciona una fecha"
                              format="YYYY-MM-DD"
                              confirmBtnText="Confirm"
                              cancelBtnText="Cancel"
                              customStyles={{
                                  dateIcon: {
                                      position: 'absolute',
                                      left: 0,
                                      top: 4,
                                      marginLeft: 0,
                                      borderBottomWidth: 1
                                  },
                                  dateInput: {
                                      marginLeft: 36,
                                      borderWidth: 0,
                                      borderBottomWidth: 1,
                                      color: '#939393',
                                  }
                                  // ... You can check the source to find the other keys.
                              }}
                              onDateChange={(date) => {this.setState({date: date})}}
                          />
                          <View>
                              <Text style={[styles.input_error]}>{this.state.errorDate}</Text>
                          </View>
                      </View>

                      <View style={[styles.marg_t48]}>
                          <AppTextArea
                              title="Breve descripción del evento*"
                              placeholder="Escribe aquí..."
                              value={this.state.description}
                              maxLength={250}
                              onChange={(message)=>this.setState({description:message})}
                              txtError={this.state.errorDescription}
                          />
                      </View>

                      { this.state.isSaving && (
                          <View style={[styles.marg_t24]}>
                              <ActivityIndicator size='large' color='#3797DB' />
                          </View>
                      )}
                      <View style={[styles.marg_t48]}>
                          <AppButtonIconOn
                              title="Finalizar"
                              action={() => this.validInfo()}
                              disabled={this.state.isSaving}
                              color={styles.blue}
                          />
                      </View>

                      <View style={[styles.marg_t16, styles.marg_b24]}>
                          <AppButtonIconOn
                              action={() => this.props.navigation.dispatch(resetAction)}
                              title="Cancelar"
                              disabled={this.state.isSaving}
                              color={styles.grey}
                          />
                      </View>

                  </View>

              </Content>
          </Container>
      );
    }
  }

  emailValid(email){
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(email) === false) {
          this.setState({errorEmail: 'Ingresa un email valido'});
      }
  }

  validInfo(){
        this.setState({isSaving: true});
        let nameEvent = this.state.nameEvent;
        let nameInvited = this.state.nameInvited;
        let email = this.state.email;
        let date = this.state.date;
        let description = this.state.description;
        let cellphone = this.state.cellphone;
        let valid = true;

        if(nameEvent === ''){
            this.setState({
                errorEvent: 'Este campo es requerido',
                isSaving: false
            });
            valid = false;
        }
        if(nameInvited === ''){
           this.setState({
               errorInvited: 'Este campo es requerido',
               isSaving: false
           });
            valid = false;
        }
        if(email === ''){
            this.setState({
                errorEmail: 'Este campo es requerido',
                isSaving: false
            });
            valid = false;
        }
        if(date === ''){
            this.setState({
                errorDate: 'Este campo es requerido',
                isSaving: false
            });
            valid = false;
        }
        if(description === ''){
            this.setState({
                errorDescription: 'Este campo es requerido',
                isSaving: false
            });
            valid = false;
        }

      if(cellphone === ''){
          this.setState({
              errorCellphone: 'Este campo es requerido',
              isSaving: false
          });
          valid = false;
      }
      if(cellphone.length < 10 ){
          this.setState({
              errorCellphone: 'Ingresa un número de celular valido',
              isSaving: false
          });
          valid = false;
      }

      if(valid){
          Api.registerInvited(nameEvent,nameInvited,email,date, description, cellphone, (error,response)=>{
              if(!error){
                  Realm.write(()=>{
                      Realm.create('Invited',{
                          nameEvent: nameEvent,
                          nameInvited: nameInvited,
                          cellphone: cellphone,
                          email: email,
                          date: date,
                          description: description
                      });
                  });
                  Utils.createMessage(
                      'success',
                      'Registro Exitoso',
                      'Se agrego correctamente la información'
                  );
                  this.setState({isSaving: false});
                  this.props.navigation.dispatch(resetAction);
              }else{
                  this.setState({isSaving: false});
                  let error = error.message;
                  Utils.createMessage(
                      'danger',
                      'Registro Fallido',
                      error
                  );
              }
          });
      }
  }
}
