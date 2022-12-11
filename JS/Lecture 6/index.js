/* Math */
console.log(Math.round(4.5687));

console.log(Math.ceil(4.5687));
console.log(Math.floor(4.5687));
console.log(Math.trunc(4.5687));

console.log("Positive num = " + Math.sign(10));
console.log("Positive num = " + Math.sign(-10));

console.log(Math.pow(2, 4));
console.log(Math.sqrt(16));

console.log(Math.abs(-16));

console.log("Min = " + (Math.min(...[12,10,5,1,2,88]))); //12, 10, 5, 1, 2, 88 after spreading
console.log("Max = " + (Math.max(...[12,10,5,1,2,88]))); //12, 10, 5, 1, 2, 88 after spreading

/* typeof */
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"


/* instanceof */
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true

/* DOM */

const para1 = document.getElementById('para1');
console.log(para1);

const div = document.getElementsByTagName('div');
console.log(div);

const div1 = document.getElementsByClassName('div1');
console.log(div1);

para1.innerHTML = "para2";
para1.style.color = 'red';
div1[0].innerHTML = 'div2';
div1[0].style.color = 'blue';


const h1 = document.createElement('h1');
h1.innerHTML = "H1";
document.body.appendChild(h1);
document.write('Hello');

const span1 = document.getElementsByClassName('span1');
// span1[0].removeChild(document.getElementsByClassName('span2')[0])

const p1 = document.createElement('p');
p1.innerHTML = "para inside span";
span1[0].replaceChild(p1, document.getElementsByClassName('span2')[0]);

/* Object */
const target = {a:1, b:2};
const source = {b:3, c:4};
console.log(Object.assign(target, source));

const obj = {
    name: 'Prajal'
};
console.log(obj);
let Obj = Object.create(obj)
console.log(Obj);

const obj1 = {
    name: 'Akash',
    address: 'Pune'
}
const arrayEntries = Object.entries(obj1);
console.log("entries = " + arrayEntries);

Object.freeze(obj1);
obj1.name = 'Prajal';
console.log(obj1);

console.log("fromEntries =  " + Object.fromEntries(arrayEntries));

console.log(Object.getPrototypeOf(obj1));

console.log(Object.isFrozen(obj));
console.log(Object.isFrozen(obj1));

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
