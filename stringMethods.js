//String Methods

let str = "Hi every one i am Mahendra. Mahendra";

//includes()-->determines whether a string contains the character of specified string
let check = str.includes("am");
console.log(check);//true
console.log(str.includes("mahendra"));//false,because case sensitive

//indexOf()-->returns position of the first occurance of a specified value in a string
let index = str.indexOf("Mahendra");
console.log(index);//18
console.log(str.indexOf("Mahendra"));//18//first occuarance will be taken
console.log(str.indexOf("mahendra"));//-1,because case sensitive
console.log(str.indexOf("hjsfbhdbfhds"));//-1

//startsWith()-->determines whether a string begins with a character of a specified string
console.log(str.startsWith("Hi"));//true
console.log(str.startsWith("hi"));//false,because case sensitive

//Slice(startIndex,EndIndex)-->this method extract a part of the string and return the extracted part in the new string
let newStr = str.slice(18,26);
console.log(newStr);//Mahendra

//toLowerCase()-->converts string to lower case letter
//toUpperCase()-->converts string to upper case letter
let x = "MY Name is MAHENDRA";
console.log(x.toLowerCase());//my name is mahendra
console.log(x.toUpperCase());//MY NAME IS MAHENDRA

//trim()-->removes the white spaces from both sides of a string
let searchText = "       Salesforce         ";
console.log(searchText);//       Salesforce         //
console.log(searchText.trim());//Salesforce