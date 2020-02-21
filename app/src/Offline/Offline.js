import React, { Component } from 'react';
import {StatusBar, TouchableOpacity, View, Dimensions, ActivityIndicator, Image } from 'react-native';
import { Col, Container, Content, Grid, Text } from 'native-base';
import styles from '../../assets/newstyles';
import AppInputText from '../../components/AppInputText';
import DatePicker from 'react-native-datepicker';
import AppButtonIconOn from '../../components/AppButtonIconOn';
import Realm from '../realm/realm';
import Utils from '../Utils/Utils';
import {NavigationActions, StackActions} from 'react-navigation';
import AppHeader from '../../components/AppHeader';

const width = Dimensions.get('window').width - 30;
const resetAction = StackActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({ routeName: 'Principal'}),
	]
});
export default class Offline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSaving: false,
			nameEvent: '',
			errorEvent: '',
			name: '',
			errorName: '',
			lastName: '',
			errorLastName: '',
			lastName2: '',
			errorLastName2: '',
			cellphone: '',
			errorCellphone: '',
			phoneNumber: '',
			errorPhoneNumber: '',
			address: '',
			errorAddress: '',
			cp: '',
			errorCP: '',
			state: '',
			errorState: '',
			municipality: '',
			errorMunicipality: '',
			company: '',
			errorCompany: '',
			date: '',
			errorDate: '',
			email: '',
			errorEmail: '',
			errorField: false
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<Container style={styles.container_f9f}>
				{/* -- HeaderBar -- */}
				<AppHeader {...this.props} />
				<StatusBar backgroundColor="#fff" barStyle="dark-content"/>
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
								title="Nombre*"
								value={this.state.name}
								onChangeText={(text) => this.setState({
									name: text,
									errorName: '',
									errorField: false
								})}
								txtError={this.state.errorName}
							/>
						</View>
						<View style={[styles.marg_t24]}>
							<AppInputText
								label={"lastName"}
								title="Apellido Paterno*"
								value={this.state.lastName}
								onChangeText={(text) => this.setState({
									lastName: text,
									errorLastName: '',
									errorField: false
								})}
								txtError={this.state.errorLastName}
							/>
						</View>
						<View style={[styles.marg_t24]}>
							<AppInputText
								label={"lastName2"}
								title="Apellido Materno*"
								value={this.state.lastName2}
								onChangeText={(text) => this.setState({
									lastName2: text,
									errorLastName2: '',
									errorField: false
								})}
								txtError={this.state.errorLastName2}
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
									errorCellphone: '',
									errorField: false
								})}
								txtError={this.state.errorCellphone}
							/>
						</View>
						<View style={[styles.marg_t24]}>
							<AppInputText
								label={"address"}
								title="Dirección*"
								value={this.state.address}
								onChangeText={(text) => this.setState({
									address: text,
									errorAddress: '',
									errorField: false
								})}
								txtError={this.state.errorAddress}
							/>
						</View>
						<View style={[styles.marg_t24]}>
							<AppInputText
								label={"cp"}
								title="CP*"
								keyboardType={'number-pad'}
								maxLength={5}
								value={this.state.cp}
								onChangeText={(text) => this.setState({
									cp: text,
									errorCP: '',
									errorField: false
								})}
								txtError={this.state.errorAddress}
							/>
						</View>
						<View style={[styles.marg_t24]}>
							<AppInputText
								label={"state"}
								title="Estado*"
								value={this.state.estate}
								onChangeText={(text) => this.setState({
									state: text,
									errorState: '',
									errorField: false
								})}
								txtError={this.state.errorState}
							/>
						</View>
						<View style={[styles.marg_t24]}>
							<AppInputText
								label={"municipality"}
								title="Municipio*"
								value={this.state.municipality}
								onChangeText={(text) => this.setState({
									municipality: text,
									errorMunicipality: '',
									errorField: false
								})}
								txtError={this.state.errorMunicipality}
							/>
						</View>
						<View style={[styles.marg_t24]}>
							<AppInputText
								label={"company"}
								title="Compañia*"
								value={this.state.company}
								onChangeText={(text) => this.setState({
									company: text,
									errorCompany: '',
									errorField: false
								})}
								txtError={this.state.errorCompany}
							/>
						</View>
						<View style={[styles.marg_t24]}>
							<AppInputText
								label={"email"}
								title="Email*"
								value={this.state.email}
								onChangeText={(text) => this.setState({
									email: text,
									errorEmail: '',
									errorField: false
								})}
								txtError={this.state.errorEmail}
								keyboardType={'email-address'}
								onEndEditing={() => this.emailValid(this.state.email)}
							/>
						</View>
						{ this.state.isSaving && (
							<View style={[styles.marg_t8]}>
								<ActivityIndicator size='large' color='#3797DB' />
							</View>
						)}

						{this.state.errorField && (
							<View style={{justifyContent: 'center', alignItems: 'center', marginTop:20}}>
								<Text style={styles.input_error}>
									Revisa la información que mandas, algunos campos, son incorectos o incompletos
								</Text>
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
					<View style={styles.marg_t100}/>
				</Content>
			</Container>
		);
	}

	emailValid(email){
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(reg.test(email) === false) {
			this.setState({errorEmail: 'Ingresa un email valido'});
		}
	}

	validInfo(){
		this.setState({ isSaving: true });
		let firstName = this.state.name;
		let lastName = this.state.lastName;
		let lastName2 = this.state.lastName2;
		let cellphone = this.state.cellphone;
		let address = this.state.address;
		let cp = this.state.cp;
		let state = this.state.state;
		let municipality = this.state.municipality;
		let company = this.state.company;
		let email = this.state.email;
		let today = new Date();
		let date = today.getDate() + "/" + parseInt(today.getMonth() + 1) + "/" + today.getFullYear();
		let valid = true;

		let  currentIdNum = Realm.objects('Event').sorted('id',true);
		let nextId;
		if(currentIdNum.length > 0) {
			nextId = currentIdNum[0].id + 1;
		} else {
			nextId = 1;
		}
		if(firstName === ''){
			this.setState({
				errorName: 'Este campo es requerido',
				isSaving: false,
				errorField: true
			});
			valid = false;
		}
		if(lastName === ''){
			this.setState({
				errorLastName: 'Este campo es requerido',
				isSaving: false,
				errorField: true
			});
			valid = false;
		}
		if(lastName2 === ''){
			this.setState({
				errorLastName2: 'Este campo es requerido',
				isSaving: false,
				errorField: true
			});
			valid = false;
		}
		if(cellphone === ''){
			this.setState({
				errorCellphone: 'Este campo es requerido',
				isSaving: false,
				errorField: true
			});
			valid = false;
		}
		if(cellphone.length < 10 ){
			this.setState({
				errorCellphone: 'Ingresa un número de celular valido',
				isSaving: false,
				errorField: true
			});
			valid = false;
		}
		if(email === ''){
			this.setState({
				errorEmail: 'Este campo es requerido',
				isSaving: false,
				errorField: true
			});
			valid = false;
		}
		if(address === ''){
			this.setState({
				errorAddress: 'Este campo es requerido',
				isSaving: false,
				errorField: true
			});
			valid = false;
		}
		if(cp === ''){
			this.setState({
				errorCP: 'Este campo es requerido',
				isSaving: false,
				errorField: true
			});
			valid = false;
		}
		if(cp.length < 5){
			this.setState({
				errorCP: 'Ingresa un cp valido',
				isSaving: false,
				errorField: true
			});
			valid = false;
		}
		if(state === ''){
			this.setState({
				errorState: 'Este campo es requerido',
				isSaving: false,
				errorField: true
			});
			valid = false;
		}
		if(municipality === ''){
			this.setState({
				errorMunicipality: 'Este campo es requerido',
				isSaving: false,
				errorField: true
			});
			valid = false;
		}
		if(company === ''){
			this.setState({
				errorCompany: 'Este campo es requerido',
				isSaving: false,
				errorField: true
			});
			valid = false;
		}
		if(valid){
			try {
				Realm.write(() => {
					Realm.create('Event', {
						id: nextId,
						name: firstName,
						lastName: lastName,
						lastName2: lastName2,
						cellphone: cellphone,
						address: address,
						cp: cp,
						state: state,
						municipality: municipality,
						company: company,
						email: email,
						date: date,
						synchronized: false
					});
				});
				Utils.createMessage(
					'success',
					'Registro Exitoso',
					'Se agrego correctamente la información'
				);
				this.setState({isSaving: false});
				this.props.navigation.dispatch(resetAction);
			}catch (e) {
				console.log(e);
				Utils.createMessage(
					'danger',
					'Registro Fallido',
					e
				);
				this.setState({isSaving: false});
				this.props.navigation.dispatch(resetAction);
			}

		}
	}
}
