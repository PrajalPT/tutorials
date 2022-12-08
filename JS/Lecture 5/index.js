/* Promise.any() */
// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 3000, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 5000, 'slow'));

// const promises = [promise1, promise2, promise3];
// console.log(promise2)
// Promise.any(promises).then((value) => console.log(value));

/* Promise.race() */

// const promise11 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
// });
// const promise22 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
// });
// const promise33 = Promise.resolve(0);

// Promise.race([promise11, promise22, promise33]).then((value) => {
//     console.log(value);
// }).catch(error => console.log(error));

/* async await */
async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("Hello world !!");}, 3000);
    });
    const result = await myPromise;
    // console.log(await myPromise);
    console.log(result);
    console.log("Bye");
  }
// myDisplay();


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => {
//         console.log(response)
//         return response.json()
//     })
//   .then(json => {
//     console.log(json)
//     console.log("==========================================================")
//   })

  
//   async function asyncFunc(){
//     const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(await result.json());
//   }
//   asyncFunc();

/* Error */

function myFunc() {
    var num1 = 100;
    var num2 = 0;
               
    try {
        if ( num2 == 0 ) {
            // throw( "Divide by zero error." ); 
            // console.error(new Error("Divide by zero error.")); 
        } else {
            var num3 = num1 / num2;
        }
    }
    catch ( e ) {
        alert("Error: " + e );
    }
}
// myFunc();

//syntax error
// const func = () => 
//     console.log(hello)
// }
/* Reference Error */
// console.log(x);

/* Type Error */
// let num = 15;
// console.log(num.split("")); 

// console.log("1");
// console.log(setTimeout(() => console.log("2"))); //web apis
// console.log(Promise.resolve("3")); //microtask
// console.log("4");

const arr = [1,45,6,76,7,33,7,6];
// const result = arr.map((num, index, arr) => num * 2)
// const result = arr.filter(num => num > 10 && num * 2);
// console.log(result);
// const nums = []
// arr.forEach((num, index, arr1) => {
//     console.log("num = " + num);
//     console.log("index = " + index);
//     console.log(arr1);
//     if (num > 20) {
//         num = num * 2;
//     }
//     nums.push(num)
// });
// console.log(nums);
// const result = arr.reduce((acc, a, index, arr) => {
//     console.log("acc = " + acc);
//     console.log("current value = " + a)
//     return acc + a;
// }, 0)

// console.log(result);

const isPresent = arr.some(num => num > 500);
console.log(isPresent);