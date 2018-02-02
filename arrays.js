var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
    var arr = [element, ...array]; 
    return arr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  /*var arr = array;
  arr.unshift(element);
  return arr; */
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
    var arr = [...array, element]; 
    return arr;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var arr = array;
  arr.push(element);
  return arr;
}

function accessElementInArray(array, index) {
  return array[index]; 
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}



