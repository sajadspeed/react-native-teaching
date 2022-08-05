import React, {useState, useEffect} from 'react';

import {
	View, 
	Text, 
	ScrollView,
	FlatList,
	TextInput,
} from 'react-native';
import Post from '../components/Post';

import images from '../images';
import axios from 'axios';

const Posts = (user_id) => {
	
	const [data, setData] = useState([]);
	const [refreshing, setRefreshing] = useState(true);
	const [q, setQ] = useState();
	const [sort, setSort] = useState();
	const [page, setPage] = useState(1);
	
	useEffect(() => {
		
		getData();
		
		// test cleanUp
		const timer = setInterval(() => {
			//alert("TEST");
		}, 5000);
		
		return ()=>{
			console.log("Component Kill");
			clearInterval(timer);
		}
		
	}, [q, sort, user_id, page])
	
	const getData = ()=> {
		
		// let parameters = cleanObject({
		// 	q: q,
		// 	sort: sort,
		// 	tag: tag
		// });
		
		setRefreshing(true);
		let url = "https://dummyjson.com/products/";
		
		if(typeof q != 'undefined' && q != null)
			url += "search?q="+q;
			
		if(typeof sort != 'undefined')
			if(url.indexOf("?") >= 0)
				url += "&sort="+sort;
			else
				url += "search?sort="+sort;
		
		if(typeof page != 'undefined')
			if(url.indexOf("?") >= 0)
				url += "&page="+page;
			else
				url += "?page="+page;
				
		console.log(url);
				
		axios.get(url/*, {params: parameters}*/).then(response => {
			setRefreshing(false);
			
			setData([...data, ...response.data.products]);
			
			
		}).catch((error)=>{
			console.log("ERROR:", error);
		})
	}
	
	return(
		<>
		<TextInput
			placeholder='Type for search...'
			onChangeText={setQ}
		/>
		<TextInput
			placeholder='Sort'
			onChangeText={setSort}
		/>
		<FlatList
			data={data}
			renderItem={({item, index}) =>
				<Post
					title={item.title}
					text={item.description}
				/>
			}
			ItemSeparatorComponent={()=> <Text>------------------------------------------</Text>}
			refreshing={refreshing}
			onRefresh={getData}
			onEndReached={()=> setPage(prevPage => prevPage + 1)}
			onEndReachedThreshold={1}
			// ListHeaderComponent={()=>
				
			// }
			//horizontal
			//keyExtractor={(value, index)=> index.toString()}
		/>
		</>
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