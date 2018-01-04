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
console.log(arrayToList([10, 20, 30, 40, 50, 60, 70]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20