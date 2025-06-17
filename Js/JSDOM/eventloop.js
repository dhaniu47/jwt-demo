// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Disha");
//     // resolve(100);
//     // reject(new Error("server error"));

// });
// let sirstPromise = new Promise((resolve, reject) => {
//     console.log("Disha");
//     resolve(100);
//     // reject(new Error("server error"));

// });
// let tirstPromise = new Promise((resolve, reject) => {
//     console.log("Disha");
//     // resolve(100);
//     reject(new Error("server error"));

// });
// function sayMyName(){
//     console.log("My Name is Disha Micheal");
// }
// setTimeout(sayMyName, 10000);
// let fourthPromise = new Promise((resolve, reject) => {
//     setTimeout(function sayMyName() {
//         console.log("My Name is Disha Micheal");
//     }, 10000 );
//     resolve(1);
// })
// let promise1 = new Promise((resolve,reject) => {
//     let success = true;
//     if(success) {
//         resolve("promise fulfilled");
//     }
//     else {
//         reject("promise rejected");
//     }
// });
// promise1.then((message) => {
//     console.log("then ka message is:" + message);
// }).catch((error) => {
//     console.log("Error:" + error);
// })
// let promise2 = new Promise((resolve,reject) => {
//     let failure = false;
//     if(failure){
//         resolve("promise resolved");
//     }
//     else{
//         reject("promise get failed");
//     }
// })
// promise2.then((m) => {
//     console.log("if true" + m);
// }).catch((e) => {
//     console.log("throw error:" + e);
// })
// let promise3 = new Promise((resolve, reject) => {
//     let s = true;
//     if(s){
//         resolve("Oh now u can able to print multiple chaining then()");
//     }
//     else{
//         reject("oh unable to print then mark it false");
//     }
// })
// promise3.then((m1) => {
//     console.log("if true it returns the message:"+ m1);
//     return "promise fulfilled second message will return in the next upcoming";
// }).then((m1) => {
//     console.log("it will return the true value:" + m1);
//     return "third message will return in the next message printed";
// }).then((m1) => {
//     console.log("third message:" + m1);
// })
// let promise4 = new Promise((resolve, reject) => {
//     let yes = false;
//     if(yes){
//         resolve(10);

//     }
//     else{
//         reject(-1);
//     }
// })
// promise4.then((m) => {
//     console.log("first" + m );
//     return 20;
// }).then((m) => {
//     console.log(m);
//     return 30;
// }).then((m) => {
//     console.log(m);
// }).catch((e) => {
//     console.error(e);
// }).finally((m) => {
//     console.log("finally will run for sure ");
// })
// let promise5 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "first");
// })
// let promise6 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "second");
// })
// let promise7 = new Promise((resolve,reject) => {
//     setTimeout(resolve, 4000, "third");
// })
// Promise.all([promise7,promise5,promise6])
// .then((value) =>{
//     console.log(value);
// }).catch((error) =>{
//     console.error("eroor:"+ error);
// })
