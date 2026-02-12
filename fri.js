// class person{
//     constructor(name,age){
//         this.name= name;
//         this.age = age;
//     }
// }
// let p1 = new person("abhiskek",30);
// console.log(p2);

// function testfunction(){
//     console.log("Inside testfunction,this refers to: ");
//     console.log(this);

// }
// testfunction();

// let person = {
//     name: "john",
//     age: 30,
//     isEmployed: true,
//     greet: function(){
//         console.log("Hello my name is "+ this.name);
//         console.log(this);
//         function innerGreet(){
//             console.log("Inner greet: hello,my name is"+this.name,"and i am",this.age,"years old");
//         }
//         // let innerGreet=()=>{
//         //     console.log("Hello from innerGreet , my name is " +  this.name);
//         //     console.log(this);
//         // }
//         //
//         innerGreet.call(this);

//         }

//     }

// class person{
//     constructor(name , age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//             console.log('hello , my name is "${this.name}and i am ${this.age} years onload.');
//             console.log(this);
//             function innerGreet(){
//                 console.log("Inner Greet: Hello,my name is",this.name,"and i am",this.age ,"years")
//             }
//     }
// }
let arr=[1,2,3];
let[a,b,c] = arr
console.log(a,b,c)