//Spread operator

//1.Expanding of string
let greeting = "Hello everyone";
let charList = [...greeting];
console.log(charList);// ['H', 'e', 'l', 'l', 'o', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']
console.log(charList[0]);//H
console.log(charList[4]);//o
console.log(charList[13]);//e

//2.Combinig array
let arr1 = ["amazon","google"];
let arr2 = ["facebook","instagram",...arr1];
console.log(arr2);//['facebook', 'instagram','amazon', 'google', ]
let arr3 = [...arr1,...arr2];
console.log(arr3);//['amazon', 'google', 'facebook', 'instagram', 'amazon', 'google']

//3.Adding values to an array
let arr4 = ["a","b","c"];
let arr5 = [...arr4,"Mahendra"];
console.log(arr5);//['a', 'b', 'c', 'Mahendra']
let arr6 = ["Gangavarapu",...arr5];
console.log(arr6);//['Gangavarapu', 'a', 'b', 'c', 'Mahendra']

//4.Combining objects
let obj1 = {name:"Mahendra",age:26,birthDay:"13/03/1996"};
let obj2 = {name:"Salesforce",age:1,year:2022};
let obj3 = {...obj1,...obj2};
console.log(obj3);// {name: 'Salesforce', age: 1, birthDay: '13/03/1996', year: 2022}
//if property name is same the value will be overrided

//5.Shallow copy
var arr7 = ["x","y","z"];
arr7.push(20);
console.log(arr7);//['x', 'y', 'z', 20]
var arr8 = arr7;
arr8.push("Mahendra");
console.log(arr8);//['x', 'y', 'z', 20, 'Mahendra']
console.log(arr7);//['x', 'y', 'z', 20, 'Mahendra']
//here the problem is the object and array in JS work as a ref.when we copy,when we update arr8,arr7 also updated.
//so that is the problem with push/pop/shift operators.so we never use those
//to avoid these we use spread operator
var arr9 = ["x","y","z"];
var arr10 = [...arr9];
arr10.push("Mahendra");
console.log(arr10);//['x', 'y', 'z', 'Mahendra']
console.log(arr9);//['x', 'y', 'z']

//6.Nested copy
var arrObj = [
    {name:"Mahendra"},
    {name:"Salesforce"}
]
//var arrObj1 = [...arrObj];
// console.log(arrObj1);//0: {name: 'Mahendra'} 1: {name: 'Salesforce'}
// arrObj1[0].name = "Gvrp";
// console.log(arrObj1);//0: {name: 'Gvrp'} 1: {name: 'Salesforce'}//
// console.log(arrObj);//0: {name: 'Gvrp'} 1: {name: 'Salesforce'}//
//Here the problem is arrObj also updated.because this is 2 level data structure.shallow copy only work at 1 level either it is in array or object.but as we goto 2 level one array,within the array there is an object.there we haev to avaoid spread operator becuase it is not to the nested copy.to do the nested copy there is a hack
//Hack for nested copy
var arrObj1 = JSON.parse(JSON.stringify(arrObj));//by json.stringify it gets converted into string and then convert into object using json.parse
arrObj1[0].name = "Gvrp";
console.log(arrObj1);//0: {name: 'Gvrp'} 1: {name: 'Salesforce'}
console.log(arrObj);//0: {name: 'Mahendra'} 1: {name: 'Salesforce'}




