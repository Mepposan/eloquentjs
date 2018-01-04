// Your code here.
function arrayToList(array) {
  var list = null;
  for (i = array.length -1; i > -1; i--) {
    list = {
      value: array[i],
      rest: list,
    }
    array == array.slice(i)
    }
    return list
  }
  console.log(arrayToList([10, 20, 30, 40, 50, 60]));
  // → {value: 10, rest: {value: 20, rest: null}}

  function listToArray(list) {
  var arr = [];
  var x = 1
  for (i = 0; i < x; i++) {
      if (list.rest != null) {
      	arr.push(list.value);
      	list = list.rest;
      	x++
      	}
      else
      	arr.push(list.value);
     }
return arr;
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
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20