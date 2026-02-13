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
