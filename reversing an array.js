// Your code here.
function reverseArray(array){
var revAr = []
for (var i = array.length -1; i >= 0; i--) {
  revAr.push(array[i])
             }
return revAr
             }

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

function reverseArrayInPlace(x) {
  var arg = 0;
  for (i = 0; i < Math.floor(x.length / 2); i++) {
    arg = x[x.length - 1 - i];
    x[x.length - 1 - i] = x[i]
    x[i] = arg;
    
  }
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]