const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (a, b) {
  for (let i = 0; i < a.length; i++) {
    if(a[i] !== b[i]) {
      return false; 
    }
  }
  return true;
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual([1,2,3], [1,2,3]);

let answer1 = eqArrays([1, 2, 3], [1, 2, 3]); // => true
let answer2 = eqArrays([1, 2, 3], [3, 2, 1]); // => false
// you can do this too
console.log('answer1', answer1);
console.log('answer2', answer2);

let answer3 = eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
let answer4 = eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
console.log('answer3', answer3);
console.log('answer4', answer4);