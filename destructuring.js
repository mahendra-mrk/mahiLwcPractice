//Array destructuring

let arr = ["amazon","google"];
// let company1 = arr[0];
// let company2 = arr[1];
// console.log(company1);//amazon
// console.log(company2);//google
//instead
let [company1,company2] = arr;
console.log(company1);//amazon
console.log(company2);//google

//Object destructuring

let options = {
    title:"Zero to Hero",
    age:26,
    type:"CRM"
}
var title = options.title;
var age = options.age;
// console.log(title);//Zero to Hero
// console.log(age);//26
//Instead
//If we want to create a variable with same name as same as property of object
var{title,age,type} = options;
console.log(title);//Zero to Hero
console.log(age);//26
console.log(type);//CRM