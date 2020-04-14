let arr = [1, 2, 3];

let sym = Symbol('Symbol');
arr[sym] = function Sum() { 
	let sum = 0;
	for(let i of arr){
		sum+=i;
	}
	return sum;
};

console.log(arr[sym]());