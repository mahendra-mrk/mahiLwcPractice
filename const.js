/******************************Const keyword********************************/
//it can't be updated and also it can't be re-declared
//const keyword supports function and block level scope similar to let keyword
const course = "Zero to Hero";
console.log(course);
//course = "Zero to Hero Learnt by Mahendra";//error,we can't change value once it is assigned using const keyword
//const course = "Salesforce";//already declared error
function abc(){
    const x = 20;
    console.log(x);//10

}
abc();
//console.log(x);//x is not defined,because it is function scope
const x = 30;
console.log(x);//30
if(1 == 1){
const x = 40;
console.log(x);//40
}
console.log(x);//30
if(1 == 1){
    const y = 50;
    console.log(y);//50
    }
    console.log(y);//y is not defined

