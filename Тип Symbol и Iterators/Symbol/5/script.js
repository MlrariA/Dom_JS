let arr = [1, 2, 3];

arr['sym'] = function() { 
	let sum = 0;
	let sym = Symbol.for('sym');
	for(let i of arr){
		sum+=i;
	}
	return sum;
};

console.log(arr['sym']());