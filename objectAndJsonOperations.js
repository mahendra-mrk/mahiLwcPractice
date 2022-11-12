let obj = {
    name:"Mahendra",
    age:26,
    dob:"13/03/1996"
}
//Object.keys()-->extract all the properties exist in object in array format
console.log(Object.keys(obj));//['name', 'age', 'dob']

//Object.values()-->extract all the values exist in object in array format
console.log(Object.values(obj));//['Mahendra', 26, '13/03/1996']

//JSON.stringify()-->to convert the JSON to a string we use JSON.stringify()
let str = JSON.stringify(obj);
console.log(str);//{"name":"Mahendra","age":26,"dob":"13/03/1996"}

//JSON.parse()-->If we want convert the string into Object, we use JSON.parse().
console.log(JSON.parse(str));//{name: 'Mahendra', age: 26, dob: '13/03/1996'}

