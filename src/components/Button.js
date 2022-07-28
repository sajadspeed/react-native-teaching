import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const Button = ({width, color, onPress, style, styleText, text}) => {

	const [backgroundColor, setBackgroundColor] = useState("#2ecc71");

	useEffect(()=>{
		switch (color) {
			case "red":
				setBackgroundColor("#e74c3c");
				break;
			case "yellow":
				setBackgroundColor("#f39c12");
				break;
			case "green":
				setBackgroundColor("#2ecc71");
				break;
			case "blue":
				setBackgroundColor("#00a8ff");
				break;
		}
	}, [color])

	return (
		<TouchableOpacity
			style={{width: width ? width : "85%", marginHorizontal: "1%"}}
			onPress={onPress}
		>
			<View style={[styles.btn, {backgroundColor: backgroundColor}, style]}>
				<Text style={[styles.btnText, styleText]}>{text}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	btn: {
		width: "100%",
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		paddingVertical: 5,
		textAlign: 'center',
		marginVertical: 5,
		borderRadius: 20,
    },
	btnText:{
		paddingHorizontal: 5,
		fontSize: 20,
		color: "#FFF",
	}
});

export default Button;