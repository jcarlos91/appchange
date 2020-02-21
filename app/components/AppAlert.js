import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, Grid, Row, Col } from 'native-base';
import MyIcon from "../icon-font";
import styles from "./../assets/newstyles";
import Realm from "../src/realm/realm";

export default class AppAlert extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHidden: true,
		};
	}

	render() {
		const { iconCircleColor, iconName, iconSize, iconColor, title, dateTime, message } = this.props;
		return (
			<TouchableOpacity onPress={ ()=> this.closeMessage()}>
				{ this.state.isHidden && (
					<View style={[styles.alertBox]}>
						<Grid>
							<Row>
								<Col size={18}>
									<View style={[styles.marg_t4]}>
										<View>
											<MyIcon
												name={'circle'}
												size={50}
												color={iconCircleColor}
											/>
										</View>
										<View style={{position:'absolute', top:15, left:(iconName === 'download-alt' || iconName === 'cancel' ? 12 : 16)}}>
											<MyIcon
												name={iconName}
												size={iconSize}
												color={iconColor}
											/>
										</View>
									</View>
								</Col>
								<Col size={82}>
									<View style={[styles.flexdir]}>
										<View style={[styles.obj_left, {flex:1}]}>
											<Text style={[styles.tg_1624m_fff, styles.text_left]}>{title}</Text>
										</View>
										<View style={[styles.obj_right, styles.marg_lr4, {flex:1}]}>
											<Text style={[styles.tg_1220l_999, styles.text_right]}>{dateTime}</Text>
										</View>
									</View>
									<View style={[styles.flexdir]}>
										<Text style={[styles.tg_1012l_fff]}>{message}</Text>
									</View>
								</Col>
							</Row>
						</Grid>
					</View>
				)}
			</TouchableOpacity>
		);
	}

	closeMessage(){
		try {
			Realm.write(() => {
				Realm.delete(Realm.objects('FlashMessage'));
			});
		} catch (e) {
			console.warn("Error on delete");
		}
		this.setState({ isHidden: !this.state.isHidden});
	}
}

