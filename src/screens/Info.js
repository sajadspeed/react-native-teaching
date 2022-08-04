import React, {useState, useEffect} from 'react';

import {
	View, 
	Text, 
	StyleSheet,
	TextInput,
	TouchableNativeFeedback, 
	Alert
} from 'react-native';

import DeviceInfo from 'react-native-device-info';

const Info = ({navigation}) => {
	
	useEffect(() => {
		console.log(DeviceInfo.getDeviceType());
		DeviceInfo.getAndroidId().then((ID)=> console.log(ID))
	}, [])
	
	return(
		<View >
			
		</View>
	)
}

export default Info;