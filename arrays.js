var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, el) {
   var newArr = arr.push(el); 
   return newArr; 
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
    return arr.push(el); 
}