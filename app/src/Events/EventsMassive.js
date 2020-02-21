import React, { Component } from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from '../../assets/newstyles';
import Realm from '../realm/realm';
import {NavigationActions, StackActions} from 'react-navigation';
import Api from '../AppConfig/api';
import Utils from '../Utils/Utils';

const resetAction = StackActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({ routeName: 'Home'}),
	]
});
export default class EventsMassive extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMassive: true
		}
	}

	componentDidMount(){
		this.eventsMassive();
	}

	render(){
		return (
			<View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}} >
				{ this.state.isMassive && (
					<ActivityIndicator size='large' color={styles.blue} />
				)}
			</View>
		);
	}

	eventsMassive(){
		let Events = Realm.objects('Event').filtered('synchronized = false');
		let eventMap = [];
		Events.map((event,key)=>{
			eventMap.push({
				"event": event.event,
				"firstName": event.name,
				"lastName": event.lastName,
				"lastName2": event.lastName2,
				"cellphone": event.cellphone,
				"phoneNumber": event.phoneNumber,
				"address": event.address,
				"cp": event.cp,
				"state": event.state,
				"municipality": event.municipality,
				"company": event.company,
				"date": event.date,
				"email": event.email,
			});
		});

		Api.eventsMassive(eventMap,(error,response)=>{
			if(!error){
				try {
					Realm.write(() => {
						Realm.delete(Realm.objects('Event').filtered('synchronized = false'));
					});
				}catch (e) {
					alert(e);
				}
				Utils.createMessage(
					'success',
					'Eventos',
					'Eventos registrados correctamente'
				);
				this.setState({isMassive: false});
				this.props.navigation.dispatch(resetAction);
			}else{
				let errorApi = error.message;
				Utils.createMessage(
					'danger',
					'Eventos',
					errorApi
				);
				this.setState({isMassive: false});
				this.props.navigation.dispatch(resetAction);
			}
		});
	}

}
