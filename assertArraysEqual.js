const { assert } = require('chai');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(x, y) {
  if (eqArrays(x, y) === true) {
    console.log(`✅✅✅ Assertion passed! ${x} === ${y}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed! ${x} !== ${y}`);
  }
};

module.exports = assertArraysEqual;