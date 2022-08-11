import React, {useState, useEffect, useRef} from 'react';

import {
	View, 
	Text, 
	StyleSheet,
	TextInput,
	TouchableNativeFeedback, 
	Alert
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { routesServer } from '../util/functions';

import RNRestart from 'react-native-restart';

const Login = ({navigation}) => {
	
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	
	const passwordInput = useRef();
	
	//let tmpNumber = 5;
	const tmpNumber = useRef(5);
	
	const login = async ()=>{
		try{
			//tmpNumber.current = 7;
			const data = {
				email: email,
				password: password,
			};
			
			const response = await axios.post(routesServer.api+"user_login.php", data, {timeout: 1000});
			
			if(response.data.status == 1){
				await AsyncStorage.setItem("token", response.data.token);
				RNRestart.Restart();
			}
			else
				alert(response.data.error);
		}
		catch(error){
			alert(error);
		}
	}
	
	return(
		<View style={styles.container}>
			<TextInput
				placeholder='Email:'
				keyboardType='email-address'
				style={styles.textInput}
				onChangeText={setEmail}
				returnKeyType="next"
				onEndEditing={() => passwordInput.current.focus()}
			/>
			<TextInput
				placeholder='Password:'
				secureTextEntry
				style={styles.textInput}
				onChangeText={setPassword}
				ref={passwordInput}
			/>
			<TouchableNativeFeedback
				onPress={login}
			>
				<View style={styles.button}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</View>
			</TouchableNativeFeedback>
			<TouchableNativeFeedback
				onPress={()=>navigation.navigate("Signup")}
			>
				<View style={styles.button}>
					<Text style={styles.buttonText}>SIGNUP</Text>
				</View>
			</TouchableNativeFeedback>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	textInput: {
		width: '80%',
		borderWidth: 1,
		borderColor: '#CCC',
		borderRadius: 15,
		marginVertical: 10,
		paddingHorizontal: 10
	},
	button: {
		width: '90%',
		backgroundColor: '#3498db',
		paddingVertical: 5,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center', 
		marginVertical: 10
	},
	buttonText: {
		color: '#FFF',
		fontSize: 18
	},
	keyboard: {
		width: '60%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginTop: 10
	},
	keyboardButton: {
		width: '32%',
		height: 40,
		alignItems: 'center',
		marginVertical: 5, 
		backgroundColor: '#efefef',
		borderRadius: 10,
	},
	keyboardButtonText: {
		fontSize: 24
	}
});

export default Login;