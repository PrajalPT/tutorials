console.log("Hello World");
//data types
//premitives data types
// var a = -20;//number //present in globl scope
// var b = true;//boolean
// var c = null;//null
// var d;//undefined
// var e = "hghg"/2;//Not a Number(NaN)
// var f = "Hello"//string
// //how to iterate string
// for (let i = 0; i < f.length; i++){
//     console.log(f[i]);
// }

//non premitives data types
//Array/Object/Function
var a = [10,20,30,40];
//a.__proto__;//to check detailed properties and its constructor
var b = {
    firstName: 'Prajal',
    lastName: 'Tikar'
}
var c = function test(){
    console.log("inside test");
}
//pass by value
// var a = 20;
// var b = a;

//pas by reference
var p = {
    firstName: 'Prajal',
    lastName: 'Tikar'
}
 var q = p;//here we are coping the reference of th object

 var r = {...p}//here we are creating a new object