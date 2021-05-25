const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual([1,2,3], [1,2,3]);

let answer1 = eqArrays([1, 2, 3], [1, 2, 3]); // => true
let answer2 = eqArrays([1, 2, 3], [3, 2, 1]); // => false
// you can do this too
console.log('answer1', answer1);
console.log('answer2', answer2);

let answer3 = eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
let answer4 = eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
console.log('answer3', answer3);
console.log('answer4', answer4);


// ya
// rather than manually console logging it out
const assertArraysEqual = function(x, y) {
  if (eqArrays(x, y) === true) {
    true;
    console.log(`✅✅✅ Assertion passed! ${x} === ${y}`);
  } else {
    false;
    console.log(`🛑🛑🛑 Assertion Failed! ${x} !== ${y}`);
  }
};
assertArraysEqual([1,2,3],[1,2,3]);


const removingItems = function(source, itemsToRemove) {
  let newResults = [];
  for (let item of source) {
    for (let remove of itemsToRemove) {
      if (item !== remove) {
        if (typeof item === typeof remove) {
          newResults.push(item);
        }
      }
    }
  }
  return newResults;
};

const without = function(source, itemsToRemove) {
  console.log(removingItems(source, itemsToRemove));
};

without([1, 2, 3], [1]); // => [2, 3]

without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

//How come this logged so many times

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
