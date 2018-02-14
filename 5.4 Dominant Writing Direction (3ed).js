function dominantDirection(text) {
let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  
 let dominant = scripts.reduce((n, {count}) => n > count ? n : count, 0);
if (dominant == 0) return "No scripts found";
 
 let filtered = scripts.filter(({count}) => count == dominant);
 let dominantDir = filtered[0]["name"]
 return dominantDir
  
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl