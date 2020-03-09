# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dexterchan94/lotide`

**Require it:**

`const _ = require('@dexterchan94/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Accepts 2 arrays as parameters and logs whether or not they are equal to the console.
* `assertEqual(actual, expected)`: Accepts 2 primitives and logs whether or not they are equal to the console.
* `assertObjectsEqual(actual, expected)`: Accepts 2 objects and logs whether or not they are equal to the console.
* `countLetters(str)`: Accepts a string as a parameter and returns an object containing a count of how many of each of the letters was in the string.
* `countOnly(allItems, itemsToCount)`: Accepts 2 parameters, an array containing a list of names and an object containing which names should be counted (for example { Karl: true, Jason: true }) and returns an object containing a count of how many times each specified name appeared in the array.
* `eqArrays(array1, array2)`: Accepts 2 arrays as parameters and returns true if they are identical and false if they are not identical.
* `eqObjects(object1, object2)`: Accepts 2 objects as parameters and returns true if they are identical and false if they are not identical.
* `findKey(obj, callback)`: Accepts an object and a callback function as parameters and returns the first key for which the callback function returns true.
* `findKeyByValue(obj, value)`: Accepts an object and a value as a parameter and returns the first key in the object which matches the value.
* `flatten(arr)`: Accepts an array (with nested arrays) as a parameter and returns an array where the values are no longer nested. Only works for arrays that are nested 1 level deep.
* `head(arr)`: Accepts an array as a parameter and returns the first value in the array.
* `letterPositions(sentence)`: Accepts a string as a parameter and returns an object containing all of the letters in the string and the indices at which they occur in the string as an array.
* `map(arr, callback)`: Accepts an array and a callback function and returns an array that has had the callback function executed on each element. 
* `middle(array)`: Accepts an array as a parameter and returns an array containing the value(s) that are in the middle of the array. If there are an even number of elements in the array, returns the middle two values. Returns an empty array if there are two values or less.
* `tail(arr)`: Accepts an array as a parameter and returns the same array with the first element removed. 
* `takeUntil(array, callback)`: Accepts an array and a callback function as parameters. Iterates through each element in the array until the callback function returns true. Once the callback function returns true, an array containing all of the elements in the array up until (not including) that point. 
* `without(source, itemsToRemove)`: Accepts an array of values and an array of items to remove as parameters and returns an array containing all the values except the ones specified to be removed. 