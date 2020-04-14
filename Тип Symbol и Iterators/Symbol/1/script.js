let obj = {
	a: 1,
	b: 2,
	c: 3,
};

let sym = Symbol('Symbol');
obj[sym] = 'JavaScript';

for(let i in obj){
	console.log(i + ':' + obj[i]);
}