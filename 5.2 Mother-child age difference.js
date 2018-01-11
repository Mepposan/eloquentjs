function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / (array.length);
  }
  
  var byName = {};
  ancestry.forEach(function(person) {
    byName[person.name] = person;
  });
  
  function mother(person) {return byName[person.mother]};
  function motherAgeKnown(person) {return byName[person.mother] != undefined};
  function motherAgeAtBirth(person) {return person.born - mother(person).born;};
  
  console.log(average(ancestry.filter(motherAgeKnown).map(motherAgeAtBirth)).toFixed(1));
  // → 31.2