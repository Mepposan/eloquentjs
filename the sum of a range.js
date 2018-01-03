// Your code here.
function range(start, end, step) {
    var result = [];
    if (step == undefined) step = 1;
    if ((start <= end) && step > 0) {
      for (var i = start; i <= end; i += step)
      {
        result.push(i);
      }}
    else if ((start >= end) && step < 0) {
      for (var i = start; i >= end; i+= step)
      {
        result.push(i);
      }}
    else console.log("coś zjebałeś")
    return result
  }
  
  function sum(range) {
    var sum = 0;
    for (var i = 0; i < range.length; i++){
      sum += range[i];
    }
    return sum;
  }
  
  console.log(range(5, -12, -2));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55