// const data =[5];
// const [x, y = "saumya"] = data;
// console.log(x);
// console.log(y);
// let person = {
//     name: "saumya",
//     age: 21,
//  
// };
// let {name,phoneno} = person;

// console.log(name);

// console.log(phoneno);
// let arr1 = [1,2,3];
// let arr2 = [...arr1,4,5];
//     console.log(arr2);

    // let arr = [1,2,3,4,5];
    // let arr2 = [...arr,500,600]; //spread operator
    // arr2[0] = 100;
    // // console.log(arr);
    // console.log(arr2);

    // //with objects
    // let emp = {id: 1 , name: "saumya"};
    // let details = {...emp , role:"traveller"};
    // console.log(details);


    let arr1 = [1,2,{name: 'john'}];
    let arr2 =[...arr1];
    console.log(arr2);
    arr2[1] = 10;
    console.log(arr1);
    console.log(arr2);
// primitive value - deep Copy(copied by value)
//objects - shallow copy(chnages both places,works as a reference form)
    arr2[2].name = 'jane';
    console.log(arr1);
    console.log(arr2);

