let obj = {
	a: 1,
	b: 2,
	c: 3,
};

let sym = Symbol('Symbol');
obj[sym] = function Name() { alert('!') };

console.log(obj);
obj[sym]();