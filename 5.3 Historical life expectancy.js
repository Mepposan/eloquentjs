function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function grupBy(array, key) {
  return array.reduce(function(x, y) {
    (x[y[key]] = x[y[key]] || []).push(y);
    return x;
  }, {});
};

Array.prototype.groupBy = function(prop) {
  return this.reduce(function(groups, item) {
    var val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
}

ancestry.map(function(person) {person.died = Math.ceil(person.died / 100); return 'died'})
//console.log(ancestry.groupBy('died'))
console.log(ancestry.map(function(array){return array["died"]}))

// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94