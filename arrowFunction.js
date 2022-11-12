//Arrow function

// function abc(){
//     console.log("hello");
// }
// abc();//hello
const abc = ()=>console.log("mahendra");
abc();//mahendra

// function sum(data){
//     let sum = data+10;
//     return sum;
// }
// console.log(sum(10));//20
const sum = data =>{
    let sum = data+10;
    return sum;
}
console.log(sum(10));//20


// const sum1 = (data1,data2) =>{
//     let sum1 = data1+data2+10;
//     return sum1;
// }
// console.log(sum1(10,20));//40
const sum1 = (data1,data2)=>data1+data2+10;
console.log(sum1(10,20));//40


var arr = [1,2,3,4];
let newArr = arr.map((item)=>item*2);
console.log(newArr);


//Problems solved by arrow function
// let obj = {
//     name1:"Mahendra",
//     getName:function(){
//         console.log(this.name1);
//         function fullName(){
//             console.log(this.name1);//undefined

//             console.log("my full name is "+ this.name1 +"Gangavarapu");//my full name is undefinedGangavarapu
//         }
//         fullName();
//     }
// }
//  obj.getName();//Mahendra
let obj = {
    name1:"Mahendra",
    getName:function(){
        console.log(this.name1);//Mahendra
        const fullName=()=>{
            console.log(this.name1);//Mahendra
            console.log("my full name is "+ this.name1 +"Gangavarapu");//my full name is MahendraGangavarapu
        }
        fullName();
    }
}
 obj.getName();//Mahendra