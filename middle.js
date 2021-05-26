const eqArrays = function(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(x, y) {
  if (eqArrays(x, y) === true) {
    true;
    console.log(`✅✅✅ Assertion passed! ${x} === ${y}`);
  } else {
    false;
    console.log(`🛑🛑🛑 Assertion Failed! ${x} !== ${y}`);
  }
};

const middle = function (removeMiddleItem) {
  var midNum = Math.floor(removeMiddleItem.length / 2);
  let result = [];
  for (let j = 0; j < removeMiddleItem.length; j++) {
    if (j === midNum || j === midNum + 1) {
    } else {
      result.push(removeMiddleItem[j])
    }
  }
  console.log(midNum)
  return result;
}

console.log (middle([1,2,3,4,5,6]))