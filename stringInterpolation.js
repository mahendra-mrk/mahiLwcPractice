//String interpolation

var name1 = "Sales";
var name2 = "force";
console.log(name1+name2);//Salesforce

var nam = "Mahendra";
var age = 26;
var str = "My name is "+nam+". My age is "+age;
console.log(str);
//if it is bigger string like this,it is very complex to write + and "".
var a = 2;
var b = 3;
var str1 = "the sum of "+a+" and "+b+" is "+a+b;
console.log(str1);//the sum of 2 and 3 is 23
//instead of evaluating the expression,it is concatinating with string
//to solve these problems we go for string interpolation
 var myName = "Mahendra";
 var myAge = 26;
 console.log(`My name is ${myName}, and My age is ${myAge}`);//My name is Mahendra, and My age is 26

 var x = 20;
 var y = 30;
 console.log(`the sum of ${x} and ${y} is ${x+y}`);//the sum of 20 and 30 is 50

 //In real time we use like this
 var recordId = "0015j00000Z7FMwAAN";
 console.log(`http://salesforce.com/${recordId}`);//http://salesforce.com/0015j00000Z7FMwAAN
 //here we are passing the dynamic recordId
