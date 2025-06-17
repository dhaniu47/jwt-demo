// {

// function sayMyName(finalName){
//     console.log(finalName);
// }
// sayMyName("Dhanis");

// }
// honey("sipra");
// function honey(naina){
//     console.log(naina);

// }
// // fun("mammy");
// let fun = function(name){
//     console.log(name);
// }
// fun("it shows refference errors if we run function expression before declaration");
// class Salina {

// }
// const Object1 = new Salina();
// console.log("function-call stack:LIFO (last in first out");
// console.log("function - first calss citizen")
// console.log(`asign to variable
//     as arg
//     reduce function
//     `);
//     let g = function(){
//         console.log("function expression :ohh Welcome mr.");
//     }
//     g();

//     function greetMe(greet,fullname){
//         console.log("Hello",fullname);
//         greet();
//     }
//     function greet(){
//         console.log("Greeting for the day");
//     }
//     greetMe(greet,"Disha");

//     function stalina(salina,urnm){
//         console.log("Hi Dear",urnm);
//         salina();
//     }

//     function salina(){
//         console.log("call a function in another");
//     }
//     stalina(salina,"Malhotra");

//     function solve(number){
//         return function(number){
//             return number*number;
//         }
//     }
//     let l = solve(5);
//     let fl = l(10);
//     console.log(fl);

//     const array = [
//         function(a,b) {
//             return a + b;
//         },
//         function(a,b) {
//             return a - b;
//         },
//         function(a,b){
//             return a*b;
//         }
//     ];
//     let first = array[0];
//     let ans1 = first(10,5);
//     console.log(ans1);
//     let second = array[1];
//     let ans2 = second(15,9);
//     console.log(ans2);
//     let third = array [2];
//     console.log(third(5,5));

//     let obj1 = {
//         Name: "Nishi",
//         Role: "Full stack web developer",
//         Experiance: "2 years",
//         Age: 23,
//         Weight: 45,
//         Height: "5ft",
//         wish: () => {
//             console.log("I wish to be a full stack developer");
//         }
//     };
//     console.log(obj1.Age);
//     console.log(obj1.Name);
//     console.log(obj1.Role);
//     obj1.wish();

//     console.log(`Temporal deadZOne
//         1.Variable Scoping
//         i. Global scope
//         ii. function scope
//         iii. block scope`);

//         const age = 15;
//         console.log("age:", age);
//         {
//             console.log("Global scope acesss within Block Statement - hey ur age :", age);
//         }
//         if (true){
//             console.log("Global scope acesss within if Statement - age:",age);
//         }
//         for (let i =0; i < 2; i++){
//             console.log("Global scope acesss within for loop - age is:",age);
//         }
//         function Greetme1(){
//             console.log("Global scope acesss within funtion - age -",age);
//         }
//         Greetme1();
//         console.log("function scope");
//         function greetme2(){
//             const sisri = "Cutee";
//             console.log("function scope - sisri:", sisri);

//         }
//         greetme2();
//         console.log("Block scope");
//         {
//             var blockScope = "I am a block scope variable";
//         }
//         console.log(blockScope);

//         console.log(blockScope);
//         {
//             var blockScope = "I am a block scope variable";
//         }
//         {
//             let blockScope2 = "Hey Here I am";
//             console.log(blockScope2);
//         }
//         console.log("var - Global & function scoped; let & const - block scoped");
// console.log("Class");
// class Human {
//     //properties
//     age;
//     #wt = 45;
//     ht = 180;
//     //constructer
//     constructor(newAge, newHeight, newWeight){
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }
//     //behaviour
//     walking(){
//         console.log("I am Walking -",this.#wt);
//     }
//     running() {
//         console.log("Hey, Dude let's Run");
//     }
//     get fetchWeight(){
//         return this.#wt;
//     }
//     set modifyWeight(val){
//         this.#wt = val;
        
//     }
// }
// let obj = new Human(60, 190, 101);
// console.log(obj.age);
// console.log(obj.ht);
// console.log(obj.fetchWeight);
// obj.walking();
// obj.running();
// console.log(obj.fetchWeight);
// obj.modifyWeight = 50;
// console.log(obj.fetchWeight);
// console.log("default paramete");
// function sayName(myName = "salini") {
//     console.log("my name is:",myName);
// }
// sayName();
// sayName("lisa");
// function sanu(fName,lName){
//     console.log("Name:",fName," ",lName);
// }
// sanu("Disha");
// function richel(fn,ln = fn.toUpperCase()){
//     console.log(fn," ",ln);
// }
// richel("Dhan");
// function ss(value = {age:23,wt:45,nm:"Black cat"}){
//     console.log("object:",value);
// }
// ss();
// function lili(val = ["jeena","Naswat",98,69]){
//     console.log("Array value",val); 
// }
// lili();
// function ull(r = "rahul"){
//     console.log("value:",r);

// }
// ull(null);
// function ull(r = "rahul"){
//     console.log("value:",r);

// }
// ull(undefined);
// function getAge(){
//     return 60;
// }
// function utility(name,age = getAge()){
//     console.log(name,"=",age)
// }
// utility("ms Drake");
// console.log("In-Built objects.............");
// console.log("Math objects");
// console.log("pi-value =",Math.PI);
// console.log("find max :",Math.max(60,30,600,800,300,657982,890,567));
// console.log("find min :",Math.min(60,30,600,800,300,657982,890,567));
// console.log("Round off :",Math.round(1.7));
// console.log("print floor value :",Math.floor(1.7));
// console.log("print ciel value :",Math.ceil(1.7));
// console.log("print absolute value :",Math.abs(-9));
// console.log("print random value :",Math.random());
// console.log("print random2 value :",Math.random());
// console.log("print random3 value :",Math.random());
// console.log("print sqareroot value :",Math.sqrt(9));
// console.log("print power value :",Math.pow(2,10));
// console.log("Date objects");
// let currentDate = new Date();
// console.log("print current date :",currentDate);
// let date = new Date('june 1 2025 07:15');
// console.log(date);
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.setFullYear(2001));
// console.log(date);
// console.log("Object cloning............");
// let obje1 = {
//     name: "Micheal",
//     age: 30,
//     wt: 70,
//     ht:180
// };
// console.log(obje1)
// obje1.favColor = "White";
// console.log(obje1);
// console.log("Object cloning using spread operator");
// let src = {
//     name: "Micheal",
//     age: 30,
//     wt: 70,
//     ht:180
// };
// let dest = {...src};
// console.log("dest:",dest);
// console.log("src:",src);
// dest.name = "john";
// console.log("dest:",dest);
// console.log("assign method");
// let src2= {
//     name: "Micheal",
//     age: 30,
//     wt: 70,
//     ht:180
// };
// let dest2 = Object.assign({},src);
// src2.favColor = "Violet";
// console.log(dest2);
// console.log(src2);
// let src3 = {
//     value:101,
//     name: "sipra",
//     richel:"edword"
// }
// dest2 = Object.assign({},src2,src3);
// console.log(dest2);
// console.log("object cloning using Iteration method");
// let src4 = 
//     {
//   name: 'sipra',
//   age: 30,
//   wt: 70,
//   ht: 180,
//   favColor: 'Violet',
//   value: 101,
//   richel: 'edword'
// };
// let dest4 = {};
// for(let key in src4){
//     console.log(key);
//     let newKey = key;
//     let newValue = src4[key];
//     dest4[newKey] = newValue;
// }
// src4.age = 90;
// console.log("src",src4);
// console.log("dest",dest4);
// console.log("Garbage collector......");
// console.log("Error handeling in JS........");
// console.log(`error which disrupts the normal flow of excution
//  types: Run-time Error-while the code is excuting,-console.log(x); referrence error x is not defined
//  compile time error-compile time errors can be cought during parsing of the code before the excution of the code
// console.log(1; - Synax error`);
// try{
//     console.log("I am inside try Block let's catch the error");
//     console.log(x);
//     console.log("my try blocks ends here");
// }
// catch(e) {
//     console.log("ohh see here is the error:",e);
// }
// finally{
//     console.log("I will run everytime");
// }
// console.log("how to create costume errors by using\"throw\" keyword089");
// try{
//     console.log(x);

// }
// catch(er){
//     throw new error("first declare then print",e);

// }
// let errorCode = 100;
// if(errorCode == 100 ) {
//     throw new Error("Invalid Json");
// }
console.log("Js DOM Manipulation:.........");
console.log(`Window object-global object`);




           







