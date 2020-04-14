
const arrSum = function() {
return this.reduce( (sum, elem) => sum += elem);
}

const getRandomArr = length => {
const sym = Symbol.for('sum');
const arr = [];
const getRandomNum = () => {
return Math.floor(Math.random() * 10 + 1);
}
while (arr.length < length) {
arr.push(getRandomNum());
}
arr[sym] = arrSum;
return arr;
}

const getRepeatNum = (arr1, arr2) => {
let temp;
const sym = Symbol.for('sum');
const newArr = [];
const compare = (sym, arr) => {
return arr.indexOf(sym) >= 0;
}
while (arr1.length) {
temp = arr1.pop();
if (compare(temp,arr2) && !compare(temp,arr1)) {
newArr.push(temp);
}
}
newArr[sym] = arrSum;
return newArr;
}

const repeatNum = getRepeatNum(getRandomArr(15),getRandomArr(15));
console.log(repeatNum[Symbol.for('sum')]());