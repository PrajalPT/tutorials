'use strict';

/* this inside an object and in global scope */
// this.house = "Home"; //global object
// this.table = "Home table";

// let johnRoom = {
//     table: 'johns table',
//     cleanTable() {
//         console.log("cleaning the " + this.table);
//     }
// }

// johnRoom.cleanTable();
// let cleanTableBind = johnRoom.cleanTable.bind(this);
// johnRoom.cleanTable.bind(this)();
// cleanTableBind();

/* this inside a function */
// this.house = "Home"; //global object
// this.table = "Home table";

// let johnRoom = {
//     table: 'johns table',
//     cleanTable() {
//         // return function(soap) { //Anonymous Function
//         return (soap) => {
//             console.log("cleaning the " + this.table + " " + soap);
//         }
//     }
// }

// const innerFunction = johnRoom.cleanTable();
// innerFunction("Lux");
// johnRoom.cleanTable()("Lux");

/* call, apply and bind */
// this.house = "Home"; //global object
// this.table = "Home table";

// let johnRoom = {
//     table: 'johns table',
//     // cleanTable: function cleanTable(soap) { // this code is for call and bind
//     cleanTable: function cleanTable(...soap) { // this code is for apply
//         console.log("cleaning the " + this.table + " " + soap);
//     }
// }

// let neetasRoom = {
//     table: 'neetas table',
// }
// // johnRoom.cleanTable.call(this, "Lux");
// // johnRoom.cleanTable.call(neetasRoom, "Lux", "Medimix");// this code is for call and bind
// // const neetaCleanTableBind = johnRoom.cleanTable.bind(neetasRoom, "Lux");
// // neetaCleanTableBind();
// johnRoom.cleanTable.apply(neetasRoom, ["Lux", "Medimix"]);

/* Different way of writing a function */
// Pure Functions
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2,5));//7
// console.log(add(2,5));//7
// console.log(add(2,5));//7
// console.log(add(2,5));//7

//Impure Functions
// let addNew = 0;

// function add(a,b){ 
//     addNew = 1; 
//     let add2 = Math.random();
//     return a + b + add2
// }
// console.log(add(4,5))
// console.log(add(4,5))
// console.log(add(4,5))
// console.log(add(4,5))

//Function Expression
// greetExp(); //Uncaught TypeError: greetExp is not a function
// var greetExp = function () {
//     console.log("Welcome to Javascript Expression");
// };
// greetExp();
// greet();
// function greet() {
//     console.log("Welcome to Javascript");
// };

//Named Function Expression
// greetExp(); //Uncaught TypeError: greetExp is not a function
// var greetExp = function welcome() {
//     console.log("Welcome to Javascript Expression");
// };
// // welcome(); //Uncaught ReferenceError: welcome is not defined
// greetExp();
// greet();
// function greet() {
//     console.log("Welcome to Javascript");
// };

//Immediately Invoked Function Expressions
// (function (name) {
//     console.log("Welcome to " + name);
// })('RS Softtech');

//Constructor Function
// let Person = function (name, age) {
//     this.name = name;
//     this.age = age;
// };

// let prajal = new Person('Prajal', 25);
// let rahul = new Person('Rahul', 24);

// console.log(prajal);
// console.log(rahul);

//Named Arrow Function
// let name = (para1, para2, para3) => {
//     statements
// };

//Anonymous Arrow Function
// setTimeout(() => {
//     console.log("Anonymous Arrow Function")
// }, 1000)//print the log after 1 sec.

//First-class Function or First-class Citizen
// const foo = () => {
//     console.log("foo");
// };

// const foobar = (callback) => {
//     console.log("foobar");
//     return callback;
// };
// const returbedCallback = foobar(foo); // Invoke it using the variable
// returbedCallback();

// Higher Order Function
function f(x) {
    // HOF
    x();
    console.log("inside function f")
    return function y() {
      console.log("inside function y")
    }
}
function x() {
    console.log("inside function x")
}
const y = f(x);
y();