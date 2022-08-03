// const doSomeThingWithDelay = (str, callback) => {
// 	setTimeout(() => {
// 		callback(str + "...", str + ",,,");
// 	}, 50);
// }

// const showStr = (str) => console.log(str);

// doSomeThingWithDelay("Hello", (str, strWithAnd) => console.log(strWithAnd));

// let array = [1, 2, 3, 4, 5, 6, 7, 8];

// array.forEach((value, index)=>{
// 	console.log(value, index);
// })

const doSomeThingWithDelay = (str) => {
	
	return new Promise((resolve, reject)=> {
		const error = true;
		setTimeout(() => {
			const result = str + "...";
			if(!error)
				resolve(result);
			else
				reject("Some error: 6541631");
				
		}, 500);
	})
	
}

doSomeThingWithDelay("Hello")
.then((value)=>{
	console.log("SUCCESS", value);
})
.catch((error)=>{
	console.log("ERROR", error);
})