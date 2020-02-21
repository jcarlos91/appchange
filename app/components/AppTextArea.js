import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import {Text, Item, Label, Textarea, Input} from 'native-base';
import styles from "../assets/newstyles";

export default class AppTextArea extends Component {

	render() {
		const { width, height } = Dimensions.get('window');
		const { title, placeholder, txtError, value, onChange, disabled, maxLength, keyboardType, autoCapitalize } = this.props;

		return (
			<View>
				<View>
					<Text style={[styles.tg_1624m_363]}>{title} </Text>
				</View>
				<View style={[(txtError === '' ? styles.input_box : styles.input_box_E14)]}>
					<Item>
						<Textarea
							style={[(styles.tg_1624r_939)]}
						    rowSpan={6}
						    placeholderTextColor={'#777'}
					        placeholder={placeholder}
					        onChangeText={onChange}
					        value={value}
					        disabled={disabled}
					        maxLength={maxLength}
							keyboardType={ (keyboardType ? keyboardType : 'default') }
							autoCapitalize={ (autoCapitalize ? autoCapitalize :'sentences')}
						/>
					</Item>
					<View>
						<Text style={[styles.input_error]}>{txtError}</Text>
					</View>
				</View>
			</View>
		);
	}
}
