import React, { Component } from 'react';
import styles from '../../assets/newstyles';
import { Col, Container, Content, Grid, Text} from 'native-base';
import { ActivityIndicator, StatusBar, View, Dimensions, Platform } from 'react-native';
import DatePicker from 'react-native-datepicker';
import AppButtonIconOn from '../../components/AppButtonIconOn';
import Api from '../AppConfig/api';
import Utils from '../Utils/Utils';
import Realm from '../realm/realm';
import AppHeader from '../../components/AppHeader';

const width = Dimensions.get('window').width - 30;
const title = 'Descarga';
const OS = Platform.OS;
let permission = [];
export default class Download extends Component{
	constructor(props) {
		super(props);
		this.state = {
			dateStart: '',
			dateEnd: '',
			errorDateStart: '',
			errorDateEnd: '',
			isDownload: false
		}
	}

	componentDidMount() {
		if(OS === 'android') {
			permission = Utils.checkPermissionAndroid('WRITE_EXTERNAL_STORAGE');
			if (permission === false) {
				permission = Utils.checkPermissionAndroid('WRITE_EXTERNAL_STORAGE');
			}
		}else{
			permission._55 = true;
		}
	}

	render() {
		return (
			<Container style={styles.container_f9f}>
				{/* -- HeaderBar -- */}
				<AppHeader {...this.props} />
				<StatusBar backgroundColor="#fff" barStyle="dark-content"/>
				<Content>
					<View style={[styles.marg_16]}>
						<View >
							{Utils.checkFlashMessage()}
						</View>
						<View style={[styles.marg_t32]}>
							<Grid>
								<Col size={75} style={[styles.obj_left]}>
									<Text style={[styles.tg_1827u_363]}>Descarga de Eventos</Text>
								</Col>
							</Grid>
						</View>
						<View style={[styles.marg_t24]}>
							<View>
								<Text style={[styles.tg_1624m_363]}>Fecha Inicio* <Text style={[styles.tg_1624r_939]}/></Text>
							</View>
							<DatePicker
								style={{width: width, backgroundColor: '#f6f6f6', color: '#939393'}}
								date={this.state.dateStart}
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
								}}
								onDateChange={(date) => {this.setState({
									dateStart: date,
									errorDateStart: ''
								})}}
							/>
							<View>
								<Text style={[styles.input_error]}>{this.state.errorDateStart}</Text>
							</View>
						</View>
						<View style={[styles.marg_t24]}>
							<View>
								<Text style={[styles.tg_1624m_363]}>Fecha Fin* <Text style={[styles.tg_1624r_939]}/></Text>
							</View>
							<DatePicker
								style={{width: width, backgroundColor: '#f6f6f6', color: '#939393'}}
								date={this.state.dateEnd}
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
								}}
								onDateChange={(date) => {this.setState({
									dateEnd: date,
									errorDateEnd: ''
								})}}
							/>
							<View>
								<Text style={[styles.input_error]}>{this.state.errorDateEnd}</Text>
							</View>
						</View>
						{ this.state.isDownload && (
							<View style={[styles.marg_t24]}>
								<ActivityIndicator size='large' color={styles.blue} />
							</View>
						)}
						<View style={[styles.marg_t48]}>
							<AppButtonIconOn
								title="Siguiente"
								action={() => this.downloadEvents()}
								disabled={this.state.isDownload}
								color={styles.blue}
							/>
						</View>
					</View>
					<View style={styles.marg_t100}/>
				</Content>
			</Container>
		);
	}

	downloadEvents(){
		this.setState({isDownload: true});
		let dateStart = this.state.dateStart;
		let dateEnd = this.state.dateEnd;
		let download = true;

		if(dateStart === ''){
			this.setState({
				errorDateStart: 'Esta campo es requerido',
				isDownload: false
			});
			download = false;
		}

		if(dateEnd === ''){
			this.setState({
				errorDateEnd: 'Este campo es requerido',
				isDownload: false
			});
			download = false;
		}

		if(download){
			if(permission._55 === true){
				Api.eventsDownload(dateStart,dateEnd,(error,respose)=>{
					if(!error) {
						let message = "Descarga completa";
						Utils.createMessage(
							'download',
							title,
							message,
						);
						this.setState({isDownload: false});
						this.forceUpdate();
					}else{
						let errors = error.message;
						Utils.createMessage(
							'download',
							title,
							errors,
						);
						this.setState({isDownload: false});
						this.forceUpdate();
					}
				});
			}else{
				Utils.createMessage(
					'download',
					title,
					'Storage permission denied',
				);
				this.setState({isDownload: false});
				this.forceUpdate();
			}
		}
	}

	closeMessage(){
		Realm.write(()=>{
			Realm.delete(Realm.objects('FlashMessage'));
		});
		this.forceUpdate();
	}
}
