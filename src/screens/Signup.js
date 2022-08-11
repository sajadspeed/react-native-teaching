import React, {useState, useEffect} from 'react';

import {
	View, 
	Text, 
	StyleSheet,
	TextInput,
	TouchableNativeFeedback, 
	Alert
} from 'react-native';
import axios from 'axios';

import { routesServer } from '../util/functions';

const Signup = ({navigation}) => {
	
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	
	const [keyboardShow, setKeyboardShow] = useState(true);
	const [keyboardCharacters, setKeyboardCharacters] = useState([1,2,3,4,5,6,7,8,9,0]);
	
	const signup = async ()=>{
		try{
			
			if(typeof email == 'undefined' || email == null){
				alert("کامل کنید");
				return false;
			}
			
			const data = {
				email: email,
				password: password,
			};
			
			const response = await axios.post(routesServer.api+"user_add.php", data, {timeout: 1000});
			if(response.data.status == 1)
				navigation.navigate("Login");
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
			/>
			<TextInput
				placeholder='Password:'
				secureTextEntry
				style={styles.textInput}
				onChangeText={setPassword}
			/>
			<TouchableNativeFeedback
				onPress={signup}
			>
				<View style={styles.button}>
					<Text style={styles.buttonText}>SIGNUP</Text>
				</View>
			</TouchableNativeFeedback>
			
			{ keyboardShow ?
				<View style={styles.keyboard}>		
					{keyboardCharacters.map((charParam, index)=> 
						<TouchableNativeFeedback onPress={()=> console.log(charParam)} key={index}>
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
		marginRight: 'auto',
		marginLeft: 'auto'
	},
	keyboardButtonText: {
		fontSize: 24
	}
});

export default Signup;