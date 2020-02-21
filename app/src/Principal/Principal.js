import React, { Component } from 'react';
import {View, Image, StatusBar} from 'react-native';
import AppButtonIconOn from '../../components/AppButtonIconOn';
import styles from '../../assets/newstyles';
import Utils from '../Utils/Utils';


 // colors verde = 8BC540, azul = 1075BB, gris = 989A9D
export default class Principal extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isLoading: false
      }
  }

  render() {
      return (
          <View style={[{backgroundColor: '#FFF'}]}>
              <View style={{margin:20}}>
                  {Utils.checkFlashMessage()}
              </View>
              <View style={[styles.image]}>
                  <Image style={{width: 200, height: 150}} source={require('../../assets/icon_front.png')}/>
              </View>
              <View style={{margin:25}}>
                  <View>
                      <AppButtonIconOn
                          title={'Iniciar sesión'}
                          color={styles.blue}
                          action={()=>this.props.navigation.navigate('Login')}
                      />
                  </View>
                  <View style={{marginTop:20}}/>
                  <View>
                      <AppButtonIconOn
                        title={'Apartar evento'}
                        color={styles.green}
                        action={()=>this.props.navigation.navigate('Invited')}
                      />
                  </View>
                  <View style={{marginTop:20}}/>
                  <View>
                      <AppButtonIconOn
                          title={'Offline'}
                          color={styles.grey}
                          action={()=>this.props.navigation.navigate('Offline')}
                      />
                  </View>
              </View>
          </View>
      )
  }
}
