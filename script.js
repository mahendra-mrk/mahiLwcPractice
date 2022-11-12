//number
var x = 10;
console.log(typeof x);//number
var x = 10.87;
console.log(typeof x);//number

//bigInt
var y = 103242634326n;
console.log(typeof y);//bigInt

//string
var nam = "Mahendra";
console.log(typeof nam);//string

var nm = 'Mahendra';
console.log(typeof nam);//string

//boolean
var isMonday = true;
console.log(typeof isMonday);//boolean

//undefined
var z;
console.log(typeof z);////undefined

//objects
var obj = {};
console.log(typeof obj);//object

var arr = [];
console.log(typeof arr);//object, indirectly array also type of object

//symbol
var sym = Symbol("id");
console.log(typeof sym);//symbol

//null
var x1 = 10;
x1 = null;
console.log(typeof x1);//object,type of null is comes under as object

//string() boolean()
console.log(typeof new String("Mahendra"));//object