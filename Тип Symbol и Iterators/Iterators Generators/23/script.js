let str ='Hello Work';

str = reversStr(str);
console.log(str);

function reversStr(str) {
return [...str].reverse().join('');
}