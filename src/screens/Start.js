import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Category from './Category';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function Start() {
  return (
	<Tab.Navigator screenOptions={{headerShown: false, tabBarLabelStyle: {fontSize: 12}}} initialRouteName="Home">
		<Tab.Screen 
			name="Home" 
			component={Home} 
			options={{
				title: "خانه",
				tabBarIcon: ({focused}) => <Icon name="home-outline" size={22} color={focused ? '#2f3640' : '#7f8c8d'} />
			}} 		
		/>
		<Tab.Screen 
			name="Search" 
			component={Search}
			options={{
				title: "جست‌وجو",
				tabBarIcon: ({focused}) => <Icon name="search-outline" size={22} color={focused ? '#2f3640' : '#7f8c8d'} />,
			}} 		
		/>
		<Tab.Screen 
			name="Category" 
			component={Category} 
			options={{
				title: "دسته‌بندی",
				tabBarIcon: ({focused}) => <Icon name="apps-outline" size={22} color={focused ? '#2f3640' : '#7f8c8d'} />
			}} 	
		/>
		<Tab.Screen 
			name="Profile" 
			component={Profile} 
			options={{
				title: "پروفایل",
				tabBarIcon: ({focused}) => <Icon name="person-circle-outline" size={22} color={focused ? '#2f3640' : '#7f8c8d'} />
			}} 	
		/>
	</Tab.Navigator>
  );
}

export default Start;