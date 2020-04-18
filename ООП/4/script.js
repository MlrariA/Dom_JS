class MyString {


reverse(string) {
return Array.from(string).reverse().join('');
}

ucFirst(string) {

return string.slice(0, 1).toUpperCase() + string.slice(1);
}

ucWords(string) {

var arr = string.split(' ');
var result = [];
for (let value of arr) {
result.push(this.ucFirst(value));
}

return result.join(' ');

}
}
var str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde'));
