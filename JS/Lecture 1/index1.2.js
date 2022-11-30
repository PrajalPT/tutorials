// console.log("Hello");
// // q = 20;
// var q = 20; //because of hoisting this variable gets the memory
// console.log(q);
// console.log("before if block");
// if (true) {
//     var q = 40; //lexical scope and variabel Shadowing
//     console.log("inside if block");
//     console.log(q)
// }
// console.log("after if block");
// console.log(q);


// console.log("Hello");
// var r = 20; //because of hoisting this variable gets the memory
// console.log(r);
// console.log("before if block");
// function abc() {
//     var q = 40; //lexical scope and functional scope
//     console.log("inside if block");
//     console.log(q);
// }
// console.log("after if block");
// console.log(r);
// console.log(q);

//let and const
// let p;
// console.log(p);
// p = 30;
// console.log(p);
// {
//     let p = 20;
//     console.log(p);
// }
// console.log(p);

const t = 20;
console.log(t);

const v = [1,5,5,487,21,4];
console.log(v);
v.push(2);
console.log(v);
v.pop()
v.pop()
console.log(v);
v[3] = 400;
console.log(v);
// v = [1,5,20,4,1];
// console.log(v);

const n = {
    a:1,
    b:2,
    c:3
}
console.log(n);
n.a = 11
console.log(n);
n = {
    a:12,
    b:22,
    c:33
}
console.log(n);
