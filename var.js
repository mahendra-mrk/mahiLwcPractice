/*console.log("Testing");*/
/******************************Var keyword********************************/
/*It can be updated and also can be re-declared*/
/*It has global scope and function scope and not block level scope*/
var course = "Zero to Hero";
console.log(course);//Zero to Hero
course = "Zero to Hero will be mahendra";
console.log(course);//Zero to Hero will be mahendra
var course = "Zero to Hero LWC Course";
console.log(course);//Zero to Hero LWC Course
console.log(window.course);//Zero to Hero LWC Course
function abc(){
    var anotherCourse = "Hero in LWC";
    console.log(anotherCourse);//Hero in LWC
}
abc();
//console.log(anotherCourse);//not defned error because it is having function scope
if(2 === 2){
var x = 10;//10
console.log(x);//10
}
console.log(x);//10
console.log(window.x);//10