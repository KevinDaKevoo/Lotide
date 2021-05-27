const assertArraysEqual = function(x, y) {
  if (eqArrays(x, y) === true) {
    console.log(`✅✅✅ Assertion passed! ${x} === ${y}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed! ${x} !== ${y}`);
  }
};

const eqArrays = function(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
console.log(results1);
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [0,2,3,4,5];
assertArraysEqual(map(words, word => word[0]) , ['g','c','t','m','t']);
assertArraysEqual(map(numbers, number => 2 * number), [0,4,6,8,10]);
