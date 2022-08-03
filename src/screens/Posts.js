import React, {useState, useEffect} from 'react';

import {
	View, 
	Text, 
	ScrollView,
	FlatList
} from 'react-native';
import Post from '../components/Post';
import images from '../images';

const Posts = () => {
	
	const [data, setData] = useState([]);
	
	useEffect(() => {
		
		fetch("https://dummyjson.com/products")
		.then((dataReceive)=> dataReceive.json())
		.then(dataReceive => {
			
			setData(dataReceive.products);
			
		})
		.catch((error)=>{
			console.log("ERROR:", error);
		})
		
	}, [])
	
	return(
		<FlatList
			data={data}
			renderItem={({item}) =>
				<Post
					title={item.title}
					text={item.description}
				/>
			}
			ItemSeparatorComponent={()=> <Text>------------------------------------------</Text>}
			refreshing={false}
			onRefresh={() => console.log("Refreshing")}
			//horizontal
			//keyExtractor={(value, index)=> index.toString()}
		/>
		// <ScrollView>
		// 	{data.map((post, index) => 
				
		// 		<Post
		// 			key={index}
		// 			{...post}
		// 		/>
			
		// 	)}
		// </ScrollView>
	)
}

export default Posts;