var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
    arr = [element, ...array]; 
    return arr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToBeginningOfArray(array, element) {
    arr = [element, ...array]; 
    return arr;
}