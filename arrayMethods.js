//Array methods
let arr = [2,3,5,7,9,10];

//map()-->loop over the array and return new array based on the value return.
//Map always returns an array
//syntax
/*array.mathodName(function(currentItem,index,actualArray){

})*/
let newArray = arr.map(function(currentItem,index,actualArray){
    console.log(`currentItem is ${currentItem} index is ${index} actualArray is ${actualArray}`);
    // currentItem is 2 index is 0 actualArray is 2,3,5,7,9,10
    // currentItem is 3 index is 1 actualArray is 2,3,5,7,9,10
    // currentItem is 5 index is 2 actualArray is 2,3,5,7,9,10
    // currentItem is 7 index is 3 actualArray is 2,3,5,7,9,10
    // currentItem is 9 index is 4 actualArray is 2,3,5,7,9,10
    // currentItem is 10 index is 5 actualArray is 2,3,5,7,9,10
return currentItem*2;
})
console.log(newArray);//[4, 6, 10, 14, 18, 20]

//filter()-->return new array with all the elements that satisfy the condition
let filteredValues = arr.filter(function(currentItem,index,array){
return currentItem > 5
})
console.log(filteredValues);//[7, 9, 10]

//every()-->return true or false if every element in the array satisfy the condition
let age = [32,33,18,40];
let isAllAdult = age.every(function(currentItem){
return currentItem > 18
})
console.log(isAllAdult);//false

//some()-->return true if at least one element in the array satisfy
let age1 = [32,33,18,40];
let isAllAdult1 = age1.some(function(currentItem){
return currentItem > 18
})
console.log(isAllAdult1);//true

//sort()-->sort the elements of an array
var names = ["Shiva","Mahendra","Venkat"];
console.log(names.sort());//['Mahendra', 'Shiva', 'Venkat']
//sorting of numbers
var points = [10,39,23,75,22,50];
//console.log(points.sort());//[10, 22, 23, 39, 50, 75]
let sortedValue1 = points.sort(function(a,b){
    return a-b;//for assending order
});
console.log(sortedValue1);//[10, 22, 23, 39, 50, 75]
let sortedValue2 = points.sort(function(a,b){
    return b-a;//for assending order
});
console.log(sortedValue2);//[75, 50, 39, 23, 22, 10]

//reduce()-->this method reduces the array to a single value ( left to right)
//syntax
/*array.reduce(function(total,currentValue,index,array){

},initialValue)*/
let num = [12,78,30];
let sum = num.reduce(function(total,currentItem){
    return total+currentItem;
},0);
console.log(sum);//120

//forEach-->this method calls for each array element
//difference between map and forEach is map always return something.forEach never returns
num.forEach(function(currentItem){
console.log(currentItem);//12,78,30
})
