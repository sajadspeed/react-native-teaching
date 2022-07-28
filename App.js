import React from "react";

import {
	Text,
	View,
	StyleSheet,
	Image,
} from 'react-native';

import Button from './src/components/Button';

import Header from "./src/components/Header";

const App = () => {
	const title = "Welcome";
	
	return (
		<View style={styles.container}>
			<Header title="Hello" title2="54651" />
			<Image 
				source={require("./src/images/logo.png")}
				style = {styles.logo}
			/>
			<Text style={styles.header}>{title}</Text>
			<View style={styles.button}>
				<Text style={styles.buttonText}>Enter</Text>
			</View>
			<Button
				text="Enter"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
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