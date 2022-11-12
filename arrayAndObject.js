//1.Array
var arr = ["a","b","c"];
console.log(arr);//a,b,c
//array index starts from 0
console.log(arr[0]);//a
console.log(arr[2]);//c

//2.Object
var obj = {
    "name":"Salesforce",
    "age":26,
    "full name":"Zero to Hero"
};
console.log(obj.name);//Salesforce
console.log(obj.age);//26

console.log(obj["name"]);//Salesforce
console.log(obj["age"]);//26

//console.log(obj.full name);//not possible
//whenever the property has a space in between,we can't access it with dot notation,then we have to use array notation
console.log(obj["full name"]);//Zero to Hero

obj.myName = "Mahendra";//myName automatically added to obj array
console.log(obj);//Salesforce,26,Zero to Hero,Mahendra


