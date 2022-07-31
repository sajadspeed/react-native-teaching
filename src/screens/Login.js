import React, {useState, useEffect} from 'react';

import {
	View, 
	Text, 
	StyleSheet,
	TextInput,
	TouchableNativeFeedback, 
	Alert
} from 'react-native';

import { randomNumber } from '../util/functions';

const Login = () => {
	
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState('');
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [keyboardShow, setKeyboardShow] = useState(false);
	const [keyboardCharacters, setKeyboardCharacters] = useState([]);
	
	useEffect(()=>{
		// Run when component call
		let keyboardCharactersTmp = keyboardCharacters;
		
		while (keyboardCharactersTmp.length < 10) {
			const rndNumber = randomNumber(0, 9) + "";
			if(keyboardCharactersTmp.indexOf(rndNumber) < 0)
				keyboardCharactersTmp.push(rndNumber);
		}
		
		setKeyboardCharacters(keyboardCharactersTmp);
		Alert.alert("Hello", 
			"What the fuck are you doing man?",
			[
				{
					text: 'cancel honey'
				},
				{
					text: "Fuck Yeah",
					onPress: () => console.log("This asshole click in FUCK YEAH...")
				},
			],
			{
				cancelable: true
			}
		)
		///
	}, []);
	
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
	
	const keyboardPress = (character) => {
		setPhone( prevState => prevState + character);
		//setPhone(phone + character);
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
				onFocus={()=> setKeyboardShow(true)}
				onEndEditing={()=> setKeyboardShow(false)}
				value={phone}
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
			{ keyboardShow ?
				<View style={styles.keyboard}>		
					{keyboardCharacters.map((charParam, index)=> 
						<TouchableNativeFeedback onPress={()=> keyboardPress(charParam)} key={index}>
							<View style={styles.keyboardButton}>
								<Text style={styles.keyboardButtonText}>{charParam}</Text>
							</View>
						</TouchableNativeFeedback>
					)}
				</View>
				: null
			}
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