var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function aAddElementToBeginningOfArray(arr, el) {
  var newArr = arr; 
  newArr.unshift(el);
  return newArr;
}