import React, {useState, useEffect} from 'react';

import {
	View, 
	Text, 
	Platform
} from 'react-native';
import { Button } from '../components';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Test from '../components/Test';

const Home = ({navigation}) => {
	
	const [email, setEmail] = useState('');
	
	useEffect(() => {
		fakeGetData();
		///console.log(Platform.OS);
		AsyncStorage.getItem("user_email").then(setEmail).catch(setEmail)
	}, [])
	
	const fakeGetData = async () => {
		try{
			const username = await AsyncStorage.getItem("username");
			const password = await AsyncStorage.getItem("password");
			const response = await axios.get("json.com/products/5", {params: {username: username, password: password}});
			
			//console.log(username, password, response.data);
		}
		catch(error){
			//console.log(error.code);
		}
		
		// AsyncStorage.getItem("username").then((username)=>{
			
		// 	AsyncStorage.getItem("password").then((password)=>{
			
		// 		axios.get("https://dummyjson.com/products", {params: {username: username, password: password}}).then(response => {
		
		// 			setData(response.data.products);
					
		// 		}).catch((error)=>{
		// 			console.log("ERROR:", error);
		// 		})
			
		// 	}).catch((error)=>{
		// 		alert(error.message);
		// 	})
			
		// }).catch((error)=>{
		// 	alert(error.message);
		// })
	}
	
	return(
		<View style={{alignItems: 'center', marginTop: 10}}>
			<Test />
			<Text>{email}</Text>
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
			<Button
				text="Info"
				onPress={()=>{
					navigation.navigate("Info");
				}}
			/>
		</View>
	)
}

export default Home;