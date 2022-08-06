import React from 'react';

import {
	View, 
	Text, 
	StyleSheet,
	ActivityIndicator
} from 'react-native';

const Splash = ({navigation}) => {
	
	return(
		<View style={styles.container}>
			<ActivityIndicator
				color="blue"
				size={60}
			/>
			<Text>خوش‌‌آمدید...</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
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

export default Splash;