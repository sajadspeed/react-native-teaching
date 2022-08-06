import React from 'react';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Games from './Games';
import Programs from './Programs';

const Tab = createMaterialTopTabNavigator(); 	 

const Category = ({navigation}) => {
	
	return(
		<Tab.Navigator>
			<Tab.Screen name="Games" component={Games} />
			<Tab.Screen name="Programs" component={Programs} />
		</Tab.Navigator>
	)
}

export default Category;