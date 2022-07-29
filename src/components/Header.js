import React from 'react';

import {View, Text} from 'react-native';

const Header = ({title, title2}) => {
	return(
		<View style={{width: '100%', backgroundColor: "#efefef", alignItems: 'center', paddingVertical: 10}}>
			<Text>{title}</Text>
		</View>
	)
}

export default Header;