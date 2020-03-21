let str = '12 34 56 78';
let res = str.replace(/(\d)(\d)/g, '$2$1');
console.log(res);

let stra = '31.12.2025';
let resa=stra.replace(/(\d+).12.(\d+)/g,'$2.12.$1');
console.log(resa);