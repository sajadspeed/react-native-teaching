import React, {useState} from 'react';

import {
	View, 
	Text, 
	StyleSheet,
	TextInput,
	TouchableNativeFeedback
} from 'react-native';

const Login = () => {
	
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	
	const login = () => {		
		const data = {
			email: email,
			phone: phone,
			username: username,
			password: password,
		};
		
		console.log(data);
		sendToAPI(data)
	}
	
	const sendToAPI = (data) => {
		/// SEND DATA
	}
	
	return(
		<View style={styles.container}>
			<TextInput
				placeholder='Email:'
				keyboardType='email-address'
				style={styles.textInput}
				onChangeText={setEmail}
			/>
			<TextInput
				placeholder='Phone Number:'
				keyboardType='numeric'
				style={styles.textInput}
				onChangeText={setPhone}
			/>
			<TextInput
				placeholder='Username:'
				style={styles.textInput}
				onChangeText={setUsername}
			/>
			<TextInput
				placeholder='Password:'
				secureTextEntry
				style={styles.textInput}
				onChangeText={setPassword}
			/>
			<TouchableNativeFeedback
				onPress={login}
			>
				<View style={styles.button}>
					<Text style={styles.buttonText}>LOGIN</Text>
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
		alignItems: 'center'
	},
	buttonText: {
		color: '#FFF',
		fontSize: 18
	}
});

export default Login;