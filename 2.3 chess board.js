var rzad1 = " ";
var rzad2 = "#";
var wiersze = 0;
var size = 8;

while (wiersze < size)
{
  if (rzad1.length < size && rzad1.length % 2 != 0) {
  rzad1 = rzad1 + "#";
  }

  else if (rzad1.length < size && rzad1.length % 2 == 0) {
  rzad1 = rzad1 + " ";

  }
  else if (rzad2.length < size && rzad2.length % 2 != 0) {
  rzad2 = rzad2 + " ";
  }

  else if (rzad2.length < size && rzad2.length % 2 == 0) {
  rzad2 = rzad2 + "#";
  }

  else if ((rzad1.length >= size) && (rzad2.length >= size) && (wiersze % 2 == 0))
  {
  console.log(rzad1);
  wiersze = wiersze + 1;
  }

  else if ((rzad1.length >= size) && (rzad2.length >= size) && (wiersze % 2 != 0))
  {
  console.log(rzad2);
  wiersze = wiersze + 1;
  }
}