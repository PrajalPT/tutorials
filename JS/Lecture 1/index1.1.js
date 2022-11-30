console.log("Hello world");
//Primitive data types

var a = false; //declaration, defination and initialization data type id boolean
console.log(typeof a); //"typeof" to check type of the variable
var b; //declaration
b = "aaa"; //defination 
// console.log(z);
// let z;

var c = null;
console.log(typeof c);

var d = "aaaa" / 2;
console.log(typeof d);

var e = "Hello I am in classroom";
console.log(typeof e);

var f = e; //copy values of e into f

//Non primitive data types
var g = {
    a:1,
    b:2,
    c:3
};

console.log(typeof g);

var h = g; //copy reference of g into h
g.b = 22;
h.a = 11;
console.log(g);
console.log(h);

var i = [1,2,32,45,6,7,8];

i.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);//sort in ascending

i.sort((a, b) => a > b ? -1 : a < b ? 1 : 0);//sort in descending

console.log(typeof i);

function abc() { console.log("inside function") }

console.log(typeof abc);