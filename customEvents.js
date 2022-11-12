//Custom events
document.addEventListener("evtName",function(data){
    console.log("evtName is called and send", data.detail);//evtName is called and send {name: 'Mahendra'}
});
function callCustomMethod(){
    let evt = new CustomEvent("evtName",{
        detail:{name:"Mahendra"}
    });
    document.dispatchEvent(evt);
} 