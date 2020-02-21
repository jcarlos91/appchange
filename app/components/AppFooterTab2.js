import React, { Component } from 'react';
import { 
    StyleSheet, StatusBar, SafeAreaView, Image, Linking, ActivityIndicator, 
    FlatList, Alert, RefreshControl, ScrollView, ImageBackground, TouchableOpacity, 
    TouchableHighlight, Dimensions 
} from 'react-native';
import { Button } from 'react-native-elements';
import { 
    StyleProvider, Container, Header, Title, Subtitle, Content, Footer, 
    FooterTab, Left, Right, Body, Icon, Text, Picker, Form, Input, View, Item, 
    H1, H2, H3, Card, CardItem, Grid, Row, Col, Badge, Tab, Tabs, TabHeading, 
    ScrollableTab, Label 
} from 'native-base';

import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";

export default class AppFooterTab2 extends Component {

    render() {

		const { navigate } = this.props.navigation;
		
        return (
			
			<Footer style={{borderTopWidth:1, borderTopColor:'#f3f3f3'}}>
				<FooterTab>
					<TouchableOpacity style={styles.footer_content} onPress={() => navigate('Plantilla1Screen')}>
						<MyIcon
							name={'agentes'}
							size={18}
							color={'#2A93DF'} 
						/>
						<Text style={{marginTop:3, fontSize:12, color:'#939393'}}>Agentes</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.footer_content} onPress={() => navigate('Plantilla1Screen')}>
						<MyIcon
							name={'user'}
							size={18}
							color={'#939393'} 
						/>
						<Text style={{marginTop:3, fontSize:12, color:'#2A93DF'}}>Perfil</Text>
					</TouchableOpacity>
										
				</FooterTab>
			</Footer>

        );
    }
}