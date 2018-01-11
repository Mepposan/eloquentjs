function countBs(string){
var position = 0;
var result = 0;
while (position < string.length) {
  if (string.charAt(position) == "B") {
    result = result + 1; 
    position = position + 1;
  }
  else
    position = position + 1;
}
return result;
}

function countChar(string, B){
var position = 0;
var result = 0;
while (position < string.length) {
  if (string.charAt(position) == B) {
    result = result + 1; 
    position = position + 1;
  }
  else
    position = position + 1;
}
return result;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
