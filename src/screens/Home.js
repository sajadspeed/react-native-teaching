import React from 'react';

import {
	View, 
	Text, 
} from 'react-native';
import { Button } from '../components';

const Home = ({navigation}) => {
	
	return(
		<View style={{alignItems: 'center', marginTop: 10}}>
			<Button
				text="Login"
				color="blue"
				onPress={()=>{
					navigation.navigate("Login");
				}}
			/>
			<Button
				text="Posts"
				onPress={()=>{
					navigation.navigate("Posts");
				}}
			/>
		</View>
	)
}

export default Home;