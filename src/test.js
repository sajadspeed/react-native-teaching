const showInfo = ({name, age, city, id}) => {
	let result = "Name: " + name + ", Age: " + age + ", City: " + city;
	
	if(typeof id != "undefined")
		result += ", ID:" + id;
	
	return result;
	
	//return "Name: " + person.name + ", Age: " + person.age + ", City: " + person.city;
}


const person = {
	name: 'Ali',
	age: 20,
	city: 'Tehran',
}

console.log(showInfo(person));

// const {city, age} = person;

// console.log(city, age);

// const courses = [18, 15];

// const [c2, c1] = courses;

// console.log(c2, c1);
