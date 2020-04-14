let obj = {
	a: 1,
	b: 2,
	c: 3,
};

let sym = Symbol('Symbol');
obj[sym] = function Sum() { 
	let sum = 0;
	for(let i in obj){
		sum+=obj[i];
	}
	return sum;
};

console.log(obj[sym]());