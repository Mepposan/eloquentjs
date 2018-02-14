function deepEqual(ob1, ob2) {
  if (ob1 === ob2) return true;
  
  if (typeof ob1 != "object" || ob1 == null || 
      typeof ob2 != "object" || ob2 == null)
    return false;
    
   var ob1PropNum = 0, ob2PropNum = 0;
  
      for (var x in ob1) 
        ob1PropNum++;
        
      for (var x in ob2) { 
        ob2PropNum++;
        if (!(x in ob1) || !deepEqual(ob1[x], ob2[x]))
      return false;
      }
  
      return ob1PropNum == ob2PropNum;
     }

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true