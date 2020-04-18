class User {

constructor(name, surname) {
this._name = name;
this._surname = surname;
}

getFullName() {
return this._name + ' ' + this._surname;
}

}

class Student extends User {

constructor(name, surname, year) {
super(name, surname);
this._year = year;

}

getCourse() {
let now = new Date();
return now.getFullYear() - this._year;
}

}



var student = new Student('Иван', 'Иванов', 2017);

console.log(student._name); //выведет 'Иван'
console.log(student._surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student._year); //выведет 2017
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2020


