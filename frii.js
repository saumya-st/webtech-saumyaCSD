console.log("start");

for(let i =0;i<1e5;i++){
console.log("Hello,world");
}
console.log("end");

setTimeout( function(){
console.log("start");
for(let i = 0;i<1e5;i++){}
console.log("Task done");
} , 0);
for(let i = 0;i<50;i++){
console.log("end");}


function greet(name){
    console.log("hello"+ name);
}
function processUserInput(callback){
    let name = "saumya";
    callback(name);
}
processUserInput(greet);




console.log("start");
setTimeout(function(){
    console.log("Inside timeout");
},20000);
console.log("end");


//callback hell problem

//future result - promise



let promise = new Promise(function (resolev,reject){
    let success = true;
    if(success)
{
    
}}