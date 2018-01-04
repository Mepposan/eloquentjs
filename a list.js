// Your code here.
function arrayToList(array) {
  var list = null;
  for (i = array.length -1; i > -1; i--) 
    list = {value: array[i], rest: list};
  return list;
}

console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}

function listToArray(list) {
  var array = [];
  var x = 1
  for (i = 0; i < x; i++) {
      if (list.rest != null) {
      	array.push(list.value);
      	list = list.rest;
      	x++
      	}
      else
      	array.push(list.value);
     }
return array;
}
  
  console.log(listToArray(arrayToList([10, 20, 30, 40, 50, 60])));
  // → [10, 20, 30]

function prepend(value, rest) {
var list = {value: value,
	    	rest: rest,}
return list
}

  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}

function nth(list, index) {
var n = 0
var x = 1
  for (i = 0; i < x; i++) {
    if (x == index + 1)  	
    	n = list.value;
    else {
      list = list.rest;
      x++;
    }
  }
return n;
}

console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20