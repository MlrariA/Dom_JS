let obj = {
a: 1,
b: 2,
c: 3
}

let iterator = createIterator(obj);
function *createIterator(obj) {
for (let value in obj){
yield obj[value];
}
}

for (let value of iterator){
console.log(value);
}