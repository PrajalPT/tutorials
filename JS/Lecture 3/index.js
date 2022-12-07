'use strict'
/* Closure */

// function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();


// function makeFunc() {
//     const name = 'Mozilla'; //non closure function
// }

// const myFunc = makeFunc();
// myFunc();

function makeFunc() { //memorized function
    let num = 2;
    function add() {
      num += 2;
    }
    return add;
}

const myAdd = makeFunc();
myAdd();

/* ES6 features */
//Const variable
var a = 10;
const PI = 3.14;
let obj = {
    name: 'Akash',
    address: 'Pune'
};
obj.address = 'Sinhagad road';
obj.pin = '455111';
console.log(obj);
// obj = { //Type error assign to const variable
//     name: 'Kirti',
//     address: 'Pune'
// };

// const obj1 = {
//     name: 'Akash',
//     address: 'Pune'
// };
// obj1.name = 'Rahul';
// console.log(obj1);


/* arrow function */
this.table = "Hall table";

let johnRoom = {
    table: 'johns table',
    cleanTable() {
        // return function(soap) { //Anonymous Function
        return (soap) => { //arrow function
            console.log("cleaning the " + this.table + " " + soap);
        }
    }
}

const innerFunction = johnRoom.cleanTable();
innerFunction("Lux");

/* Default Parameter Values */
function f(x, y = 7, z = 42) {
    return x + y + z
}
console.log(f(1));

/* Rest Parameter */
function func(x, y, ...a) {
    console.log(a);
    return (x + y) * a.length
}
func(1, 2, "hello", true, 7) === 9

/* Spread Operator */
let params = [ "hello", true, 7 ]
let other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ] deep copy
// let other = params; //show copy

function f (x, y, ...a) { //rest operator
    return (x + y) * a.length
}
f(1, 2, ...params) === 9 //spread operator 

// var str = "foo"
// var chars = [ ...str ] // [ "f", "o", "o" ]

/* String Interpolation */
let customer = { name: "Foo" }
let message = `Hello ${customer.name}`
// message = "Hello" + " " + customer.name //old way

/* Property Shorthand */
let x = 0, y = 0;
let obj2 = { x, y }; //{key1: value1, key2: value2}
console.log(obj2); //{x: 0, y: 0}

/* Computed Property Names */
let obj3 = {
    foo: "bar",
    [ `baz${quux()}` ]: 42
};
function quux(){ return 'quux'; }
console.log(obj3);

/* destructuring */
/* Array Matching */
let list = [ 1, 2, 3 ]
let [ , a1, b ] = list; //destructuring
console.log(a1);
console.log(b);
[ b, a1 ] = [ a1, b ]; //swaping two variables
console.log(a1);
console.log(b);;

/* Object Matching, Shorthand Notation */
function getASTNode() {
    return {
        op: 'op',
        lhs: 'lhs',
        rhs: 'rhs',
        shh: 'shh'
    }
}
let { lhs, op, rhs } = getASTNode();

/* Object Matching, Deep Matching */
// function getASTNode1() {
//     return {
//         op1: 'op',
//         lhs1: {
//             op2: 'op1'
//         },
//         rhs1: 'rhs',
//         shh1: 'shh'
//     }
// }
// let { op1: a11, lhs1: { op2: b2 }, rhs1: c1 } = getASTNode1();

/* Object And Array Matching, Default Values */
let obj4 = { a2: 1 }
let list1 = [ 1 ]
let { a2, b2 = 2 } = obj4
let [ x1, y1 = 2 ] = list1

/* Parameter Context Matching */
function f1([ name, val ]) {
    console.log(name, val)
}
function g1({ name: n, val: v }) {
    console.log(n, v)
}
function h1({ name, val }) {
    console.log(name, val)
}
f1([ "bar", 42 ])
g1({ name: "foo", val:  7 })
h1({ name: "bar", val: 42 })

/* Fail-Soft Destructuring */
let li = [ 7, 42 ]
let [ a3 = 1, b3 = 2, c = 3, d ] = li
console.log(a3, b3, c, d);
// a === 7
// b3 === 42
// c === 3
// d === undefined