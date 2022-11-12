// function firstFunction(){
//     console.log("Hello");//Hello -->onclick
// }
// let btn = document.querySelector("button");
// btn.addEventListener("click",firstFunction);

document.addEventListener("mousemove",handler);
function handler(){
    document.querySelector(".demo").innerHTML = Math.random();
}
function removeHandler(){
document.removeEventListener("mousemove",handler);
}