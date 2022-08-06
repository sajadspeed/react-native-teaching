const routesServer = {
	api: 'http://192.168.236.17/test/'
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {randomNumber, routesServer};