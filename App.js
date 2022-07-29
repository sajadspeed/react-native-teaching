import React, {useState} from "react";

import {
	Text,
	View,
	StyleSheet,
	Image,
	Button,
} from 'react-native';
import Login from "./src/screens/Login";

const App = () => {
	
	const [number, setNumber] = useState(0);
	
	const increaseNumber = () => {
		setNumber(number+1);
	}
	
	const decreaseNumber = () => {
		setNumber(number-1);
	}
	
	return (
		<Login />
	)
	
	// return (
	// 	<View style={styles.container}>
	// 		<Text style={{marginVertical: 10, fontSize: 36, color: number > 5 ? 'red' : '#000' }}>Count: {number}</Text>
	// 		<Text style={{marginVertical: 10, fontSize: 36, color: number > 5 ? 'red' : '#000' }}>Count: {number}</Text>
	// 		<Text style={{marginVertical: 10, fontSize: 36, color: number > 5 ? 'red' : '#000' }}>Count: {number}</Text>
	// 		<Text style={{marginVertical: 10, fontSize: 36, color: number > 5 ? 'red' : '#000' }}>Count: {number}</Text>
	// 		<Text style={{marginVertical: 10, fontSize: 36, color: number > 5 ? 'red' : '#000' }}>Count: {number}</Text>
	// 		{ number < 10 ?
	// 			<Button 
	// 				title="Increase"
	// 				onPress={increaseNumber}
	// 			/>
	// 		: <Text>MAX</Text> }
	// 		{ number > 5 ?
	// 			<Button 
	// 				title="Decrease"
	// 				onPress={decreaseNumber}
	// 			/>
	// 		: null }
	// 	</View>
	// )
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	logo: {
		width: 150,
		height: 150,
		resizeMode: 'stretch',
		marginTop: 10
	},
	header: {
		fontSize: 36,
		color: '#000'
	},
	button: {
		width: '80%',
		backgroundColor: '#efefef',
		borderWidth: 1,
		borderColor: '#CCC',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
		paddingVertical: 8,
	},
	buttonText: {
		color: '#000',
		fontSize: 20
	}
})

export default App;


// class App extends React.Component{
	
// 	title = "Welcome";
	
// 	constructor(props) {
		
// 		super();
// 	}
	
// 	onClickButton(){
		
// 	}
	
// 	render(){
// 		return (
// 			<View style={styles.container}>
// 				<Image 
// 					source={require("./src/images/logo.png")}
// 					style = {styles.logo}
// 				/>
// 				<Text style={styles.header}>{this.title}</Text>
// 				<View style={styles.button}>
// 					<Text style={styles.buttonText}>Enter</Text>
// 				</View>
// 				<Button
// 					text="Enter"
// 					onPress={this.onClickButton}
// 				/>
// 			</View>
// 		)
// 	}
// }