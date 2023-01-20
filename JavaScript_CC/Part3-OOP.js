// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

const book = {
    title: 'Book 1',
    author: 'Jane Doe',
    year: '2016',
    getSummery: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};

// console.log(book);
// console.log(Object.values(book));
// console.log(Object.keys(book));

// This sucks because you have to create objects for new values.
// To solve this, we can use constructors

// Constructor function (pre class before ES6)
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    
    // Get Summery
    this.getSummery = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
// Instantiate object
// const book1 = new Book('Book 1', 'John Doe', '2016');
// console.log(book1);

// we can create functions outside of class with prototype 
//(cant use arrow functions) 

// Get Age
Book.prototype.getBookAge = function() {
    let years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`
};

// Change Years
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
};

// console.log(book1.getBookAge());
// console.log(book1);
// book1.revise(2018);
// console.log(book1);

// Inheritance

function Magazine (title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}
// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine('Mag One', 'Mysterio', '2020', 'June');

// console.log(mag1);
// console.log(mag1.getSummery());

// use Magazine contructor
// Magazine.prototype.constructor = Magazine;
// console.log(mag1);

// Objects of Protos (not recommended since after ES6 classes)

// const bookProtos = {
//     getSummery: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     },
//     getBookAge : function() {
//         let years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} old`
//     }
// }

// // Create object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book 1';
// book1.author = 'John Doe';
// book1.title = '2016';

// console.log(book1);



/* we are done with ES5 stuff lets move on to ES6 */

// OOP classes with ES6 js

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getBookAge () {
        let years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} old`
    }
    revise (newYear) {
        this.year = newYear;
        this.revised = true;
    }
    static topBookStore() {
        return 'Noble Six';
    }
}

const book2 = new Book('Book 1', 'John Doe', '2016');

console.log(book2.getBookAge());
book2.revise(2018);
console.log(book2);

// to use static methods
console.log(Book.topBookStore());

// Inheritance with sub/super classes

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}
// Instantiate Magazine object
const Mag1 = new Magazine('Mag-One', 'Mysterior snr', '2020', 'June');

console.log(Mag1);
console.log(Mag1.getSummary());