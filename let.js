/******************************Let keyword********************************/
/*It can be updated but can't be re-declared*/
//let keyword supports function and block level scope
let course = "Zero to Hero";
console.log(course);//Zero to Hero
course = "Zero to Hero learnt by Mahendra";
console.log(course);//Zero to Hero learnt by Mahendra
//let course = "Zero to Hero .....";//it will throw error because using let we can't re-declare variable
console.log(window.course);//undefined, because it is not in the global scope
function abc(){
    let x = 'Mahendra';
    console.log(x);//Mahendra
}
abc();
//console.log(x);//x is not defined
if(2 == 2){
let y = "Salesforce";
 console.log(y);//Salesforce
}
//console.log(y);//y is not defined