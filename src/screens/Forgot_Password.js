import React from 'react';

import {
	View, 
	Text, 
} from 'react-native';
import { Button } from '../components';

const Forgot_Password = ({navigation}) => {
	
	return(
		<>
			<Text>This is fucking Forgot</Text>
			<Button
				text="Go to Home"
				color="blue"
				onPress={()=>{
					navigation.navigate("Home");
				}}
			/>
		</>
	)
}

export default Forgot_Password;