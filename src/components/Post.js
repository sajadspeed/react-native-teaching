import React from 'react';

import {View, Text} from 'react-native';

const Post = ({title, text}) => {
	return(
		<View style={{elevation: 2, width: '95%', padding: 20, marginHorizontal: '2.5%', backgroundColor: '#CCC', borderRadius: 15, marginVertical: 5}}>
			<Text style={{fontSize: 24, color: '#000'}}>{title}</Text>
			<Text>{text}</Text>
		</View>
	)
}

export default Post;