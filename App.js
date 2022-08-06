import React, {useState, useEffect} from "react";

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {setCustomText, setCustomTextInput} from 'react-native-global-props';

import strings from './src/strings';

import { I18nManager } from "react-native";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Forgot_Password from "./src/screens/Forgot_Password";
import Posts from "./src/screens/Posts";
import Info from "./src/screens/Info";
import Signup from "./src/screens/Signup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "./src/screens/Splash";
import Start from "./src/screens/Start";

const Stack = createNativeStackNavigator();

const App = () => {
	
	const [isLogin, setIsLogin] = useState("1");
	const [loading, setLoading] = useState(true);
	
	I18nManager.allowRTL(true);
	I18nManager.forceRTL(true);
	
	strings.setLanguage("en");
	
	const customTextProps = {
		style: {
			fontFamily: 'main',
		},
	};
	
	setCustomText(customTextProps);
  	setCustomTextInput(customTextProps);
	
	useEffect(() => {
		isLoginFunction();
	}, [])
	
	const isLoginFunction = async ()=>{
		try{
			const token = await AsyncStorage.getItem("token");
			setLoading(false);
			if(token != null && token.length == 32)
				setIsLogin("1");
			else
				setIsLogin("0");
		}
		catch{}
	}
	
	return (
		<NavigationContainer >
			<Stack.Navigator screenOptions={{headerTitleStyle: {fontFamily: 'main'}}}>
				
				{/* SCREENS */}
				
				{
					!loading ? 
					
						isLogin == 1 ?
						
						<>
							<Stack.Screen 
								name="Start"
								component={Start}
								options={{
									headerShown: false
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
								name="Signup"
								component={Signup}
								options= {{
									title: 'ثبت‌نام'
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
						</>
						
						:
						<>
							<Stack.Screen 
								name="Login"
								component={Login}
								options= {{
									title: 'لاگین'
								}}
							/>
							<Stack.Screen 
								name="Signup"
								component={Signup}
								options= {{
									title: 'ثبت‌نام'
								}}
							/>
						</>
					:
					<Stack.Screen 
						name="Splash"
						component={Splash}
						options= {{
							headerShown: false
						}}
					/>
				}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;