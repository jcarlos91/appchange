import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {Root, StyleProvider} from 'native-base';
import OAuth from './app/src/AppConfig/oauthManager';
import platform from "./native-base-theme/variables/platform";
import getTheme from "./native-base-theme/components";
import Login from "./app/src/Login/Login";
import Principal from './app/src/Principal/Principal';
import Invited from './app/src/Invited/Invited';
import Account from './app/src/Account/Account';
import MyIcon from './app/icon-font';
import Events from './app/src/Events/Events';
import EventNew from './app/src/Events/EventNew';
import Realm from './app/src/realm/realm';
import EventSynchronized from './app/src/Events/EventSynchronized';
import Download from './app/src/Download/Download';
import Offline from './app/src/Offline/Offline';
import EventsMassive from './app/src/Events/EventsMassive';
import styles from './app/assets/newstyles';

const config = Realm.objects('Config');
let route = '';
if(config.length === 0){
    route = 'Principal';
}else {
    if (OAuth.isAuth()) {
        route = "Home";
    } else {
        route = 'Login';
    }
}

const TabNavigator = createBottomTabNavigator({
    Events: {screen : Events,
        navigationOptions: ({}) => ({
            title: 'Eventos',
            tabBarIcon: ({ tintColor }) => (
                <MyIcon
                    name={'calendar'}
                    size={18}
                    color={tintColor}
                />
            )
        })
    },
    Account: { screen: Account,
        navigationOptions: ({}) => ({
            title: 'Perfil',
            tabBarIcon: ({ tintColor }) => (
                <MyIcon
                    name={'user'}
                    size={18}
                    color={tintColor}
                />
            )
        }),
    },
    Download: { screen: Download,
        navigationOptions: ({}) => ({
            title: 'Descargas',
            tabBarIcon: ({ tintColor }) => (
                <MyIcon
                    name={'download-alt'}
                    size={18}
                    color={tintColor}
                />
            )
        })
    }

},{
    tabBarOptions: {
        activeTintColor: styles.blue,
    }
});


const AppNavigator = createStackNavigator({
    Home: { screen: TabNavigator },
    Principal: { screen: Principal },
    Login: { screen: Login },
    Invited: { screen: Invited },
    EventNew: { screen: EventNew },
    EventSynchronized: { screen: EventSynchronized },
    Offline: { screen: Offline },
    EventsMassive: { screen: EventsMassive }
},{
    headerMode: 'none',
    initialRouteName: route,
    navigationOptions: {
        gesturesEnabled: false
    },
});

const Navigator = createAppContainer(AppNavigator);
export default () =>
    <StyleProvider  style={getTheme(platform)}>
      <Root>
        <Navigator />
      </Root>
    </StyleProvider>
;
