import React, { Component } from 'react';
import { ActivityIndicator,	Dimensions,	Image,	RefreshControl,	ScrollView,	StatusBar, TouchableOpacity, View } from 'react-native';
import {Body, Container, Content, Header, Left, Right, Text} from 'native-base';
import styles from '../../assets/newstyles';
import MyIcon from '../../icon-font';
import Utils from '../Utils/Utils';
import Api from '../AppConfig/api';
import Realm from '../realm/realm';
import AppCardAll from '../../components/AppCardAll';
import AppLoader from '../../components/AppLoader';
import AppHeader from '../../components/AppHeader';
import AppButtonIconOn from '../../components/AppButtonIconOn';

let events = Realm.objects('Event');
let myEvents = events.sorted('id', 'DESC').filtered('synchronized = true');
let outOfSync = events.sorted('id', 'DESC').filtered('synchronized = false');
export default class Events extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			refreshing: false,
			errorNetwork: false,
			indicator: false,
			deleteEvent: false
		}
	}

	async _onRefresh() {
		this.setState({
			indicator: true,
			mostrar: false,
			refreshing: true,
		});
		this.getEvents();
	}

	componentDidMount() {
		this.getEvents();
	}

	render() {
		const { width, height } = Dimensions.get('window');
		if(this.state.isLoading){
			return (
				<View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}} >
					<ActivityIndicator size='large' color='#3797DB' />
				</View>
			)
		}else {
			let today = new Date();
			let date = today.getDate() + "/" + parseInt(today.getMonth() + 1) + "/" + today.getFullYear();
			return (
				<Container style={styles.container_f9f}>
					{/* -- HeaderBar -- */}
					<AppHeader {...this.props} />
					{/* -- Modal -- */}
					<StatusBar backgroundColor="#fff" barStyle="dark-content"/>
					{this.state.deleteEvent && (
						<AppLoader
							backColor={'rgba(255, 255, 255, 0.7)'}
							colorSpinner={styles.blue}
						/>
					)}
					{/* -- Body -- */}
					<ScrollView
						horizontal={false}
						refreshControl={
							<RefreshControl
								colors={[styles.blue, styles.blue]}
								refreshing={this.state.refreshing}
								onRefresh={this._onRefresh.bind(this)}
							/>
						}
					>
						<Content>
							<View style={[styles.marg_16]}>
								{Utils.checkFlashMessage()}
								<View style={[styles.obj_left, styles.marg_t8]}>
									<Text style={[styles.tg_1827u_363]}>Eventos</Text>
								</View>

								<View style={[styles.obj_center, styles.marg_t4, styles.marg_b16]}>
									<Text style={[styles.tg_1624r_939]}>Última modificación: {date}</Text>
								</View>
							</View>

							{ outOfSync.length > 0 && (
								<View style={[styles.marg_8, styles.pad_t16, styles.pad_b16, styles.marg_t16, {backgroundColor:'#FBF0ED'}]}>

									<View style={[styles.pad_lr8]}>
										<Text style={[styles.tg_1627m_752]}>Tienes ({outOfSync.length}) evento(s) sin guardar</Text>
									</View>
									<View style={[styles.pad_lr8]}>
										<Text style={[styles.tg_1624r_752]}>Asegúrate de tener internet al realizar esta acción</Text>
									</View>
									<View style={[{justifyContent: 'flex-end', alignItems:'flex-end'}]}>
										<View style={[styles.pad_lr8]}>
											<AppButtonIconOn
												action={() => this.eventsMassive()}
												title={"Guardar todos (" + outOfSync.length +")"}
												color={styles.green}
											/>
										</View>
									</View>

									{ this.renderProspectsOutOfSync()}

								</View>
							)}
							<View style={[styles.marg_16]}>
								{this.renderEvents()}
							</View>
							<View style={styles.marg_t100}/>
						</Content>
					</ScrollView>
					<View style={{position: 'absolute', bottom: 10, right: 20, zIndex: 2}}>
					    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EventNew')}>
					        <View >
					            <MyIcon
					                name={'plus-circled-1'}
					                size={60}
					                color={styles.blue}
					            />
					        </View>
					    </TouchableOpacity>
					</View>
				</Container>
			);
		}
	}

	eventsMassive(){
		this.props.navigation.navigate('EventsMassive');
	}

	renderEvents(){
		return myEvents.map((event,key)=>{
			let id = event.id;
			return(
				<View style={[styles.marg_8]} key={key}>
					<AppCardAll
						campo2={event.name + " " + event.lastName + " " + event.lastName2}
						campo3={event.cellphone}
						campo1={event.event}
						campo4={event.company}
						linkName={'Eliminar'}
						action={()=>this.dropEvent(id)}
					/>
				</View>
			)
		});
	}

	getEvents(){
		this.setState({
			isLoading: true,
			refreshing: false,
			indicator: false,
		});
		Api.myEvents((error,response)=>{
			if(!error){
				let events = response.events;
				try {
					Realm.write(()=>{
						Realm.delete(Realm.objects('Event').filtered('synchronized = true'));
					});
				}catch (e) {
					alert(e);
				}
				try {
					Realm.write(() => {
						events.map((value, key) => {
							Realm.create('Event', {
								id: value.id,
								event: value.eventName,
								name: value.name,
								lastName: value.lastName,
								lastName2: value.lastName2,
								cellphone: value.cellphone,
								phoneNumber: value.phoneNumber,
								address: value.address,
								cp: value.cp,
								state: value.state,
								municipality: value.municipality,
								company: value.company,
								date: value.date,
								email: value.email,
								synchronized: true
							})
						});
					});
				}catch (e) {
					alert(e.message);
				}
				this.setState({
					isLoading: false,
					refreshing: false,
					indicator: false,
				});
			}else{
				this.setState({
					isLoading: false
				});
				let error = error.message;
				Utils.createMessage(
					'danger',
					'Error Eventos',
					error
				);
				this.forceUpdate();
				this.setState({
					isLoading: false,
					refreshing: false,
					indicator: false,
				});
			}
		});
	}

	renderProspectsOutOfSync(){
		let data = events.sorted('id', 'DESC').filtered('synchronized = false');
		return data.map((event,key)=>{
			let statusTitle = 'Sin guardar';
			let backTag = '#757575';
			let linkTagColor = '#FFF';
			let id = event.id;
			return (
				<View style={[styles.marg_8]} key={key}>
					<AppCardAll
						campo2={event.name + " " + event.lastName + " " + event.lastName2}
						campo3={event.cellphone}
						campo1={event.event}
						campo4={event.company}
						titleTag={statusTitle}
						backTag={backTag}
						linkTagColor={linkTagColor}
						action2={()=>this.action(id)}
						action3={()=>this.dropRegister(id)}
						// action4={()=>this.editRegister(id)}
					/>
				</View>
			)
		})
	}

	dropRegister(id){
		this.setState({deleteEvent: true});
		let event = Realm.objects('Event').filtered('id = '+ id);
		Realm.write(()=>{
			Realm.delete(event[0]);
		});
		this.setState({deleteEvent: false});
		this.forceUpdate();
	}

	action(id){
		let data = { id: id };
		this.props.navigation.navigate('EventSynchronized',{ data: data });
	}

	closeMessage(){
		Realm.write(()=>{
			Realm.delete(Realm.objects('FlashMessage'));
		});
		this.forceUpdate();
	}

	dropEvent(id){
		this.setState({deleteEvent: true});
		Api.eventDelete(id,(error,response)=>{
			if(!error){
				this.dropRegister(id);
				Utils.createMessage(
					'success',
					'Evento',
					'Evento eliminado correctamente'
				);
				this.forceUpdate();
			}else{
				let errorMessage = error.message;
				Utils.createMessage(
					'danger',
					'Evento',
					errorMessage
				);
				this.forceUpdate();
			}
		})
	}
}
