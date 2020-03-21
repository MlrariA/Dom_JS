let str = 'a1b c34d x567z';

let res = str.match(/\d/g, '!');
let arr = 0;
for (let elem of res){
    arr+=Number(elem);
}
console.log(res);
console.log(arr);

let stra = 'a1b c34d x567z';

let resa = str.match(/\d+/g, '!');
let arra = 0;
for (let elema of resa){
    arra+=Number(elema);
}
console.log(resa);
console.log(arra);