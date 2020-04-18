class Validator {
isEmail(str) {
return /^[a-zA-Z0-9_\-]+\.?[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(str);
}

isDomain(str) {
return /^[a-zA-Z\-]+\.?[a-zA-Z]+\.?[a-zA-Z]{2,3}$/.test(str);
}

isDate(str) {
return /(\d{2})\.(\d{2})\.(\d{4})/.test(str)
}

isPhone(str) {
return /(\+375)\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}/.test(str);
}
}


var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны