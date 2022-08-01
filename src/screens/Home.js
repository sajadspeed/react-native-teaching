import React from 'react';

import {
	View, 
	Text, 
} from 'react-native';
import { Button } from '../components';

const Home = ({navigation}) => {
	
	return(
		<>
			<Text>This is fucking Home</Text>
			<Button
				text="Go to Login"
				color="blue"
				onPress={()=>{
					navigation.navigate("Login");
				}}
			/>
		</>
	)
}

export default Home;