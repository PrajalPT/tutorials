//comparision operator
let num = 10;
let num1 = "10";

console.log(num !== num1);

//switch case
let day = "";
switch ("") {
    case 0:
        day = "Sunday";
        break;
    case 1:
    case 2:
        day = "Monday";
        break;
    default: 
        day = "Not existing";
        break;
}
console.log(day);

//loops
for (let i = 0; i < 10 ; i++) {
    // console.log("i = " + i)
}

const objectPerson = {
    name: 'Prajal',
    address: 'Pune'
}

for (const key in objectPerson) {
    console.log(objectPerson[key]);
}

let arr = [1,3,4,45,76,7];

for(const value of arr) {
    console.log(value)
}

let str = "Hello world"
for(const char of str) {
    console.log(char);
}

let set = new Set();
set.add(1);
set.add(2);
set.add(2);
set.add(5);
set.add(6);
for(const value of set) {
    console.log(value);
}

let map = new Map();
map.set("1", 1);
map.set("1", 11); //override the prev value of "1" to 11
map.set("2", 2);
map.set("3", 3);

for(const [key, value] of map) {
    console.log(key + " " + value);
}

let i = 2;
while(i) {
    i = 0;
    console.log("inside while loop");
}

i = 2;
do {
    i = 3;
    console.log("inside do while loop");
} while (i !== 3)