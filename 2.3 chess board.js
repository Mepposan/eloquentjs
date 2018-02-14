var str = "", size = 8;
for (var row = 0; row < size; row++) {
  for (var column = 0; column < size; column++) {
      str += ((column % 2 != 0) ? 
             ((row % 2 == 0) ? "#" : " ") : 
             ((row % 2 == 0) ? " " : "#"));
  }
  str += "\n";
}
console.log(str)