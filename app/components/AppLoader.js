import React, { Component } from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import { View } from 'native-base';

import styles3 from "./../assets/newstyles";

export default class AppLoader extends Component {

	render() {

		const {backColor, colorSpinner} = this.props;
		const { width, height } = Dimensions.get('window');

		return (

			<View style={[styles3.obj_center, { position:"absolute", zIndex:2, width:width, height:height, backgroundColor:backColor}]}>
				<ActivityIndicator size="large" color={colorSpinner} />
			</View>

		);
	}
}
