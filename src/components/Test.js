import React, { Component } from 'react';
import { Text } from 'react-native';

class Test extends Component {
	
	constructor(props){
		console.log("Lifecycle", "constructor");
		super(props);
	}
	
	componentDidMount(){
		console.log("Lifecycle", "componentDidMount");
	}
	
	componentWillUnmount(){
		console.log("Lifecycle", "componentWillUnmount");
	}
	
	render() {
		console.log("Lifecycle", "render");
		return (
			<Text>Hello, I am your cat!</Text>
		);
	}
  
}

export default Test;