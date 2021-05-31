# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @keviny96/lotide`

**Require it:**

`const _ = require('@keviny96/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `assertArraysEqual(actual, expected)`: Function that takes in two arrays, actual and expected and asserts if they are equal or not.
* `assertEqual(actual, expected)`: Function that takes in two primitive parameters, actual and expected and asserts if they are equal or not.
* `assertObjectEqual(actual, expected)`: Function that takes in two objects, actual and expected and asserts if they are equal or not.
* `countLetters(string)`: Function that takes in string and returns object with the letter as keys and the amount of times that letter had appeared within the string.
* `countOnly(allItems, itemsToCount)`: Function that takes in an array and an object that specifies which items to count in the array by assigning true or false values to the key. Returns an object with the items that have been counted as keys and the maount of times they had appeared in allItems as the corressponding value.
* `eqArrays(actual, expected)`: Function that takes in two arrays and returns if they are true or false depending on if they equal.
* `eqObjects(actual, expected)`: Function that takes in two objects and returns if they are true or false depending on if they equal.
* `findKey(object, callback)`: Function that takes in an object and a callback function where the callback function takes in object as the parameter. When the callback function returns true, the function will return the key that yield the true results.
* `findKeyByValue(object, value)`: Function that takes in objects and value and returns the key that contains the value.
* `head(array)`: Function that takes in an array and returns the first item in the array.
* `letterPositions(string)`: Function that takes in a string and returns an object with the letters as keys and an array of index numbers at which that letter appears in the string as a value.
* `map(array, callback)`: Function that takes in an array and callback function and passes each item of array through the callback function and returns a new array of results.
* `middle(array)`: Function that takes in an array and returns everything but the middle index or middle indexes.
* `tail(array)`: Function that takes in an array and returns everything but the first item in the array.
* `takeUntil(array, callback)`: Function that takes in an array and callback function and returns everything in the array up until the item that passes through the callback function returns to be true.
* `without(array1, array2)`: Function that takes in two arrays and removes items from first that also exist in second array.