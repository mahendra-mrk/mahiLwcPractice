//setTimeOut

let timerId = window.setTimeout(function(){
    console.log("Hi Mahendra Gangavarapu");
},5000);//it is printing after 5 secs
console.log(timerId);
clearTimeout(timerId);//it will stop call the function 


//setInterval

let intervalId = window.setInterval(function(){
    console.log("hello");//repeatedly prints hello
},2000);
clearTimeout(intervalId);//stop printing