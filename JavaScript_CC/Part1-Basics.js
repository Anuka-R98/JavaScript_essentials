// console.log('Hello World')
// var, let, const
// we now use let and const instead of var
// use const mostly
// let number;
// const num = 23;
// number = 2;

// console.log(number);
// console.log(num);


// Primitive Data Types
// String, Numbers, Boolean, Null, undefined

const name = 'Anuka';
const age = 25;
const rating = 8.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
//----------------------------------



let Name = 'john';
let age = 30;

// //Concatenation
console.log('My name is ' + Name + ', and I am ' + age + ' years old');
//Template strings
somethign = `My name is ${Name} and I'm ${age} old.`
console.log(somethign);
//----------------------------------

const s = "Hello World";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLocaleLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toLocaleUpperCase());
console.log(s.split(''));

const p = 'Technology, Computers, It, Code';
console.log(p.split(','))
//----------------------------------

//Arrray - variables that holds multiple values

const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apple', 'orange', 'mango'];

fruits[3] = 'grapes';

fruits.push('pineapple');

//added to 1st
fruits.unshift('Kiwi'); 

console.log(fruits);
console.log(fruits[1]);

//take out last one off
fruits.pop();
console.log(fruits); 

//to check if something has an array, returns true,false
console.log(Array.isArray(fruits)); 
console.log(fruits.indexOf('orange'));
//----------------------------------

//Object literals

const person = {
    firstName: 'Micheal',
    lastName: 'Jackson',
    age:30,
    hobbies: ['music', 'acting', 'dancing'],
    address: {
        street: '50 main street',
        city: 'California',
        country: 'USA'
    }
}
console.log(person.firstName, person.age);
console.log(person.hobbies[2], person.address.city);

//destructuring as pulling out individual variables
const { firstName, age, address:{ city, coutry } } = person;
console.log(firstName);
console.log(city);

//add
person.email = 'michealJ123@hehe.com'
console.log(person)
//----------------------------------

const todos = [
    {
        id:1,
        text:'Take out trash',
        isCompleted: true,
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted: false,
    },
    {
        id:3,
        text:'Wash your car before 5pm',
        isCompleted: true,
    },
];

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
//----------------------------------

const todos = [
    {
        id:1,
        text:'Take out trash',
        isCompleted: true,
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted: false,
    },
    {
        id:3,
        text:'Wash your car before 5pm',
        isCompleted: true,
    },
];

// // For loop
for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number : ${i}`);
}
// // While loop
let i=0;
while(i < 10) {
    console.log(`While Loop Number : ${i}`);
    i++;
}

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for(let todo of todos) {
    console.log(todo.id);
}

// forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

const todoCompText = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});
console.log(todoCompText);
//----------------------------------

// Conditionals

const x = 10, y = 20;

if(x == 10) {
    console.log('x is 10');
}//will check value

if(x === 10) {
    console.log('x is 10');
}// === will check data type and value 

if(y === 10) {
    console.log('y is 10');
}else if(y > 10) {
    console.log('y is greater than 10');
}
else {
    console.log('y is less than 10');
}

const p = 5, q = 10;
if(p > 7 || q > 7) {
    console.log('p or q or both greater than 7');
}else{
    console.log('both lesser than 7');
}
//----------------------------------

// Ternary operator ?

const x = 12;

const color = x > 5 ? 'red' : 'blue';

console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
    break;
}
//----------------------------------

function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
addNumbers(5,10);

function addNumbers(num1=3, num2=6) {
    console.log(num1 + num2);
}
addNumbers();

function addNumbers(num1=3, num2=6) {
    return num1 + num2;
}
console.log(addNumbers(20,30));

// comment above !!!!!!!
// arrow functins came with ES6, javascript 2015

const addNumbers = (num1, num2) => {
    return num1 + num2;
}
console.log(addNumbers(100,14));

const addNums = (num1, num2) => console.log(num1 + num2);
addNums(5,80);

const addNum = (num1, num2) => num1 + num2;
console.log(addNum(33,20));

const addNumm = num1 => num1 + 5;
console.log(addNumm(33));
// //----------------------------------


// OOP with js
// pre classes
// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = () => {
        return `${this.firstName}` + ' '  +  `${this.lastName}`;
    }
}

// // Instantiate object
const person1 = new Person('Danushka', 'Ratnayake', '4-6-1998');
const person2 = new Person('Tehani', 'Jayaweera', '7-2-1999');

console.log(person1.firstName, person1.lastName);
console.log(person2.dob);
console.log('Name : ' + person2.firstName, ' and ' + ' date of birrth : ' + person2.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person2.getFullName());


// this time with prototype
function Persons(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

}

Persons.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Persons.prototype.getFullName = function() {
    return `${this.firstName}` + ' '  +  `${this.lastName}`;
}

const person3 = new Persons('Janith', 'Fernando', '4-2-1988');
const person4 = new Persons('Tina', 'Fernandez', '2-1-1995');

console.log(person3.getBirthYear(), person3.getFullName());
console.log(person4.getFullName());


// comment above .... !
// ES6 introduced classes to javsascript

// Class
class Person {
    constructor (firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear () {
        return this.dob.getFullYear();
    }
    getFullName () {
        return `${this.firstName}` + ' '  +  `${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('Danushka', 'Ratnayake', '4-6-1998');
const person2 = new Person('Tehani', 'Jayaweera', '7-2-1999');

console.log(person1.firstName, person1.lastName);
console.log(person2.dob);
console.log('Name : ' + person2.firstName, ' and ' + ' date of birrth : ' + person2.dob.getFullYear());