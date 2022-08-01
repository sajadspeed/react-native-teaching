import React, {useState} from "react";

import {
	Text,
	View,
	StyleSheet,
	Image,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import images from "./src/images";

import {
	Button,
	Header
} from './src/components';

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Forgot_Password from "./src/screens/Forgot_Password";

const Stack = createNativeStackNavigator();

const App = () => {
	
	return (
		<NavigationContainer >
			<Stack.Navigator initialRouteName="Login">
				
				{/* SCREENS */}
				
				<Stack.Screen 
					name="Home"
					component={Home}
					options={{
						title: 'خونه',
//						headerShown: false
					}}
				/>
				<Stack.Screen 
					name="Login"
					component={Login}
				/>
				<Stack.Screen 
					name="Forgot_Password"
					component={Forgot_Password}
				/>
				
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;