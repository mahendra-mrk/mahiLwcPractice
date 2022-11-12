//let element = document.querySelector('div');
let element = document.querySelector('.abc');
 //console.log(element);//<div>Hello everyone</div>
 //console.log(element.innerText);//Hello everyone
 console.log(element.innerText);//Hello LWC developers
element.style.color = "blue";

let elementAll = document.querySelectorAll('div');
console.log(elementAll);//node list(not an array, but it looks like an array)
Array.from(elementAll).forEach(function(item){
    item.style.color = "green";
})

/*
document.querySelector('.abc')
above one we can write in LWC like
this.template.querySelector('.abc')
*/