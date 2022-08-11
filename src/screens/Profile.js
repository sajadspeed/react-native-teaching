import React, {useContext, useState} from 'react';

import {
	View, 
	Text,
	Image, 
} from 'react-native';

import DocumentPicker from 'react-native-document-picker';

import RNFetchBlob from 'rn-fetch-blob';

import ImagePicker from 'react-native-image-crop-picker';

import { Button } from '../components';

import { Context } from '../util/Store';
import { routesServer } from '../util/functions';

const Profile = ({navigation}) => {
	
	const [globalState, dispatch] = useContext(Context);
	const [image, setImage] = useState();
	
	const changeProfileImage = async () => {
		try{
			//const file = await DocumentPicker.pick({type: 'image/*'});
			
			const imageFile = await ImagePicker.openPicker({
				width: 800,
				height: 800,
				cropping: true,
				includeBase64: true,
			});
			
			const response = await RNFetchBlob.fetch(
				"POST", 
				routesServer.api+"user_image.php", 
				{'Content-Type': "multipart/form-data"},
				[
					{
						name : 'image', 
						filename : "image.jpg", // !!!! filename not change
						type: imageFile.mime,
						data: imageFile.data
					}
				]
			)
			const responseFinal = JSON.parse(response.data);
			if(responseFinal.status == 1){
				alert("OK");
			}
			else
				alert(responseFinal.error);
			
		}
		catch(error){
			console.log(error);
		}
	}
	
	return(
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			
			<Button
				text={typeof image == "undefined" ? "Add Profile Image" : "Change Profile Image"}
				onPress={changeProfileImage}
				color="yellow"
			/>
			{ image ?
			<Text>{image.name}</Text> : null
			}
			<Text>Profile</Text>
			<Text>Cart count: {globalState.cartCount}</Text>
			<Button
				text="Increase Cart count"
				onPress={()=> dispatch({type: "incrementCartCount"})}
			/>
			<Button
				text="Decrease Cart count"
				onPress={()=> dispatch({type: "decrementCartCount"})}
			/>
		</View>
	)
}

export default Profile;