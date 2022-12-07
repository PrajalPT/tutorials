/* Value Export/Import */
// for hands on google codesandbox react
// import sub, { sum, pi } from "./math.js";
// console.log("2π = " + sum(pi, pi));
// console.log("2π = " + sub(pi, pi));

/* Class Definition */
// class Person {
//     constructor (id, name, address, pincode) {
//         this.id = id;
//         this.move(name, address, pincode);
//     }
//     move (name, address, pincode) {
//         this.name = name;
//         this.address = address;
//         this.pincode = pincode;
//     }
// }

// const shivani = new Person(1, 'Shivani', 'Satara', 445544);
// console.log(shivani);

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

/* Class Inheritance */

class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    };

    static defaultRectangle () {
        // return new Rectangle("default", 0, 0, 100, 100);
        console.log("inside static defaultRectangle");
    }
}

class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    };
}

const rectangle = new Rectangle(1, 10, 10, 10, 15);
const circle = new Circle(1, 10, 10, 8);

Rectangle.defaultRectangle();

/* Generator Function, Direct Use */

function* range(start, end, step) {//0 10 2
    while (start < end) {
        yield start;//0
        start += step;
    }
}

for (let i of range(0, 10, 2)) {
    console.log(i); // 0, 2, 4, 6, 8
}

/* Set collection */
let s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s);
console.log(s.size === 2);
console.log(s.has("hello"));
for (let key of s.values()) // insertion order
    console.log(key);

/* Map Data-Structure */

let m = new Map();
m.set("hello", 42);
m.set("goodbye", 43);
m.set("hello", 44);
console.log(m);
console.log(m.size === 2);
for (let [ k, val ] of m.entries())
    console.log(k + " = " + val);

/* Array Element Finding */
console.log([ 1, 3, 4, 5 ].find(x => x > 3)); // 4
console.log([ 1, 3, 4, 5 ].findIndex(x => x > 3)); // 2

/* Number Type Checking */
Number.isNaN(42) === false
Number.isNaN(NaN) === true

Number.isFinite(Number.POSITIVE_INFINITY) === false
Number.isFinite(Number.NEGATIVE_INFINITY) === false
Number.isFinite(NaN) === false
Number.isFinite(123) === true

/* Callbacks */

function myDisplayer(some) {
    console.log(some);
}

function myFirst() {
    myDisplayer("Hello"); // callback
}

function mySecond() {
    myDisplayer("Goodbye");
}

myFirst();
mySecond();

/* Asynchronous JavaScript */

const id = setTimeout(() => console.log("inside timeout"), 3000);
console.log(id);
clearTimeout(id);


const intervalID = setInterval(()=> console.log("Hello Interval"), 3000);
setTimeout(() => clearInterval(intervalID), 7000);

/* Promise */
//then methode
const promise1 = new Promise((resolve, reject) => {
    resolve('Success!');
});

promise1.then((value) => {
    console.log(value);
// expected output: "Success!"
});	

//catch method
// const promise2 = new Promise((resolve, reject) => {
//     // throw 'Error occured';
//     reject('Error occured')
// });

// promise1.catch((error) => {
//     console.error(error);
// });
// expected output: Uh-oh!

//finally method
function checkMail() {
    return new Promise((resolve, reject) => {
        //mocking api call here
      if (Math.random() > 0.5) {
        resolve('Mail has arrived');
      } else {
        reject(new Error('Failed to arrive'));
      }
    });
}

// checkMail()
// .then((mail) => {
//     console.log(mail);
// })
// .catch((err) => {
//     console.error(err);
// })
// .finally(() => {
//     console.log('Experiment completed');
// });

function resolved() {
    console.log('Resolved');
}

function rejected(result) {
    console.error(result);
}

// Promise.reject(new Error('fail')).then(() => { console.error(result); });
Promise.reject(new Error('fail')).then(rejected);
Promise.resolve('resolved').then(resolved);
// expected output: Error: fail


/* Promise.all */
const promise11 = Promise.resolve(3);
const promise22 = 42;
const promise33 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'foo'); //api call
});

Promise.all([promise11, promise22, promise33]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]

/* Promise.allSettled */
const promise111 = Promise.resolve(3);
const promise222 = new Promise((resolve, reject) => 
    setTimeout(reject, 2000, 'error'));
const promises = [promise111, promise222];
console.log(promises);
Promise.allSettled(promises).
    then((results) => results.forEach((result) => console.log(result)));

// expected output:
// "fulfilled"
// "rejected"