//Equality operators
//1.Normal comparision
//2.Strict comparision

//1.Normal comparision (==)
//==>It compares only the value,but not the type.
console.log(3 == 3);//true
console.log(3 == "3");//true
console.log("Mahendra" == "MAHENDRA");//false
console.log("Mahendra" == "Mahendra");//true

//2.Strict comparision (===)
//==>It compares value as well as datatype
console.log(3 === "3");//false
console.log(3 === 3);//true

//null vs undefined
var x;
console.log(x);//undefined
var y = null;
console.log(y);//null
var z = undefined;
console.log(z);//undefined,but this is not good practise to assign undefined to variable

console.log(x == y);//true
console.log(x === y);//false
