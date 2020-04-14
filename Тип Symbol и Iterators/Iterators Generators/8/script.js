let arr = [1, 2, 3, 4];

let iterator = createIterator(arr);

function* createIterator(arr) {

let newArr = [];
for (let i = 0; i < arr.length; i += 2) {
let buffArr = [];
for (let j = i; j < i+2; j++) {
buffArr.push(arr[j])
}
newArr.push(buffArr);
}


for (let value of newArr) {
yield value;
}
}

for (let value of iterator) {
console.log(value);

}