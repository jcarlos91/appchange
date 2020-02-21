import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Realm from '../realm/realm';
import Api from '../AppConfig/api';
import Utils from '../Utils/Utils';
import {NavigationActions, StackActions} from 'react-navigation';

const resetAction = StackActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({ routeName: 'Home'}),
	]
});
export default class EventSynchronized extends Component{
	constructor(props) {
		super(props);
		this.state = {
			data: props.navigation.state.params.data,
			isLoading:true
		}
	}

	componentDidMount(): void {
		this.synchronized();
	}

	render(){
		return (
			<View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}} >
				{ this.state.isLoading && (
					<ActivityIndicator size='large' color={'#39ace7'} />
				)}
			</View>
		)
	}

	synchronized(){
		let eventId = this.state.data.id;
		let event = Realm.objects('Event').filtered('id = ' + eventId);
		this.setState({isLoading: true});
		let eventName = event[0].event;
		let firstName = event[0].name;
		let lastName = event[0].lastName;
		let lastName2 = event[0].lastName2;
		let cellphone = event[0].cellphone;
		let phoneNumber = event[0].phoneNumber;
		let address = event[0].address;
		let cp = event[0].cp;
		let state = event[0].state;
		let municipality = event[0].municipality;
		let company = event[0].company;
		let dateTime = event[0].date;
		let email = event[0].email;

		Api.addEvent(
			eventName,
			firstName,
			lastName,
			lastName2,
			phoneNumber,
			cellphone,
			email,
			address,
			cp,
			state,
			municipality,
			company,
			dateTime,
			(error,response)=>{
				if(!error){
					Realm.write(()=>{
						Realm.delete(Realm.objects('Event').filtered('id = ' + eventId));
					});
					Utils.createMessage(
						'success',
						'Registro Exitoso',
						'Se agrego correctamente la información'
					);
					this.setState({isSaving: false});
					this.props.navigation.dispatch(resetAction);
				}else{
					let errorMessage = error.message;
					Utils.createMessage(
						'danger',
						'Registro Fallido',
						errorMessage
					);
					this.setState({isSaving: false});
					this.props.navigation.dispatch(resetAction);
				}
			});
	}
}
