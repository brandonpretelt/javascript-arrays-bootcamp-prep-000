var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, el) {
  var newArr = arr; 
  newArr.unshift(el);
  return newArr;
}