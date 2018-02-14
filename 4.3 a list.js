function arrayToList(array) {
  var obj = null
  for (i = array.length - 1; i >= 0; i--) {
    obj = {value: array[i], rest: obj}
  }
  return obj;
}

function listToArray(obj) {
  var arr = [];
  for (i = 0; obj != null; i++) {
    arr.push(obj.value);
    obj = obj.rest;
  }
  return arr;
}

function prepend(element, list) {
  var ob = {};
  ob.value = element;
  ob.rest = list;
  return ob;
}

function nth(list, number) {
  if (list == null) return undefined;
  if (number > 0) return nth(list.rest, number -1)
  else return list.value
}
console.log(nth({value: 10, rest: {rest: {value: 30, rest: null}}}, 0))
console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30, 40])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 3));
// → 20