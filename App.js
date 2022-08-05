import React, {useState} from "react";

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {setCustomText, setCustomTextInput} from 'react-native-global-props';

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Forgot_Password from "./src/screens/Forgot_Password";
import Posts from "./src/screens/Posts";
import Info from "./src/screens/Info";

const Stack = createNativeStackNavigator();

const App = () => {
	
	const customTextProps = {
		style: {
			fontFamily: 'main',
		},
	};
	
	setCustomText(customTextProps);
  	setCustomTextInput(customTextProps);
	
	return (
		<NavigationContainer >
			<Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleStyle: {fontFamily: 'main'}}}>
				
				{/* SCREENS */}
				
				<Stack.Screen 
					name="Home"
					component={Home}
					options={{
						title: 'خانه',
						// headerShown: false
						// headerTitleStyle: {
						// 	fontFamily: 'main',
						// }
					}}
				/>
				<Stack.Screen 
					name="Login"
					component={Login}
					options= {{
						title: 'لاگین'
					}}
				/>
				<Stack.Screen 
					name="Forgot_Password"
					component={Forgot_Password}
				/>
				<Stack.Screen 
					name="Posts"
					component={Posts}
				/>
				<Stack.Screen 
					name="Info"
					component={Info}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;