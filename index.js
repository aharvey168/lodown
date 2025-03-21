'use strict';

// YOU KNOW WHAT TO DO //



//////////IDENTITY//////////
/**identity: function takes in any value as an argument and returns that value unchanged
*@param { any value} value: Function takes in any value as an Input
*@returns {any value }
**/
function identity(value) {
    return value;
};
module.exports.identity = identity;
 
//////////TYPEOF//////////
/**typeOf: function takes in any value as an argument and returns that value as a string
*@param {any value} value: Function takes in any value as an Input
*@returns {value as a string}
**/
function typeOf(value) {
    if(typeof value === "number") {
        return typeof value;
    } else if(typeof value == "string") {
        return "string";
    } else if(typeof value === "boolean") {
        return "boolean";
    } else if(Array.isArray(value) === true) {
        return "array";
    } else if(value === null)  {   
        return "null";
    } else if(typeof value === "function") {
        return "function";
    } else if(typeof value === "undefined") {
       return "undefined";
    } else if(typeof value === "object" && !(value instanceof Date)){
        return "object";
    }
    return value;
}
module.exports.typeOf = typeOf;
 
//////////FIRST//////////
/**first: function takes in an array and number as an argument and return first number of elements in array
*@param {array, number} value: Function takes in an array and a number as Inputs
*@returns {first number of element in array}
**/
function first(array, number) {
   
    //If <array> is not an array, return []
    if (Array.isArray(array) === false) {
        return [];
    } else if (number < 0) {  //determine if number is negative
        return [];
    } else if (number === undefined) { //determine if the input number has not been passed in
        //return first value of the array
        return array[0];
    } else if ( number > array.length) {
        return array;
    } else { //else we have regular inputs
        return array.slice(0, number);
    }
}
module.exports.first = first;
 
//////////LAST//////////
/**last: function takes in an array and a number as an argument and returns the last number of elements of array
*@param {array, number} value: Function takes in an array and a number as Inputs
*@returns {last number of element in array}
**/
function last(array, number) {
    //If <array> is not an array, return []
    if (Array.isArray(array) === false) {
        return [];
    } else if (number < 0) {  //determine if number is negative
        return [];
    } else if (number === undefined) { //determine if the input number has not been passed in
        //return first value of the array
        return array[array.length - 1];
    } else if ( number > array.length) {
        return array;
    } else { //else we have regular inputs
        return array.slice(1, number[number.length - 1]);
    }
   
    };
module.exports.last = last;
 
/**
 * indexOf: Function searches through the array and returns the index of an input value;
 * @param {Array} collection: Function takes in an input value
 * @param {any value}: Function could take in a number, string, or boolean
 * @return { number}: Function return the index ofwhere the inut value appears in the array
 * If the input value doesnt' apear in the array return -1
  */
 function indexOf(array, value) {
    //iterate through the input array using a for loop
    for (var i = 0; i < array.length; i++) {
        //determine if the current aray value is equal to the input value
        if(array[i] === value) { //iterate through array2, array[2] ==="c"//"c" === "c"
            return i;
        }
    }
    return -1;
}
module.exports.indexof = indexOf;
 
//////////CONTAINS//////////
/**
 * contains: function that manipulates a value and returns true if the value is present within the array
 * @param {Array} collection as an input value
 * @param {value}: value: char, string, or number
 * @return {boolen}: return true if the array contains the value
 */
 
function contains(array, value) {
  if (array.includes(value)) {
        return true;
    } else {
        return false;
    }
};
module.exports.contains = contains;
 
/**
 * each: Designed to loop over a collection, Array or Object, and applies the
 * action Function to each value in the collection.
 *
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the
 * @return {function}: The Function to be applied to each value in the
 * collection
 */
 function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
 
/**
 * unique: function that takes in an array and iterates over the array and
 *  returns a new array with all the duplicates removed.
 *
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the
 * collection
 * @return {array} a n ew array with all the duplicates removed
 */
 
function unique(array) {
    var removedArray = [];
        //iterate through the input array using a for loop
        for (var i = 0; i < array.length; i++) {
            if (removedArray.indexOf(array[i]) === -1) {
                removedArray.push(array[i]);
            }
        }
        return removedArray;
    }
module.exports.unique = unique;
 
/**
 * filter: function that iterates through an array and with a call function on each element in the array 
 * If the array element returns true when passed into the ester function, the elements is pushed into an output array
 *
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the
 * collection
 * @return {array} a new array of the elements for which calling the function
 * returned true
 */
 
 function filter(array, func) {
    var filterArray = [];
    //call <function> for each element in <array> passing the arguments
    for(var i = 0; i < array.length; i++) {
    //return a new array of elements for which calling <function> returned true  
        if (func(array[i], i, array)) {
            filterArray.push(array[i]);
        }
    }
    return filterArray;
};
 
module.exports.filter = filter;
 
/**
 * reject: function that iterates through an array and with a call function on each element in the array 
 * If the array element returns false when passed into the ester function, the elements is pushed into an output array
 *
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the
 * collection
 * @return {array} a new array of the elements for which calling the function
 * returned false
 */
 function reject(array, func) {
    var rejectArray = [];
    //call <function> for each element in <array> passing the arguments
    for (var i = 0; i < array.length; i++) {
    //return a new array of elements for which calling <function> returned false
        if (!func(array[i], i, array)) {
            rejectArray.push(array[i]);
        }
    }
    return rejectArray;
};
 
module.exports.reject = reject;
 
/**
 * partition: iterates through an array and calls a tester function on each element. If the current element returns true, it is pushed into aubarray
 * in an output arry. If the current element returns false, it is pushed into a separate subAray in an output array,
 *
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the
 * collection
 * @return {array} a new array of subarrays contains all elements from the input array that returned true when passed into the tester function
 * and another subArray that contains all the elements from the input array that returned false.
 */
 
function partition(array, func) {
    var partArray = [[],[]];
    //call <function> for each element in <array> passing the arguments
    for (var i = 0; i < array.length; i++) {
        //Return an array that is made up of 2 sub arrays
        if (!!func(array[i], i, array) === true) {
            partArray[0].push(array[i]);
        } else {
            partArray[1].push(array[i]);
        }              
    }
    return partArray;
};
 
module.exports.partition = partition;
 
/**
 * map: iterates through a colection and collects a function on each element. As the elements are modified, they are pushed in an 
 * output array. The output array is returned.
 *
 * @param {array of objects}: map through objects in the array
 * @param {value of property}: properrty of every element in the array
 * @return {array}: a new array with the result of the function call on each element in the input array
 */
function map(collection,func) {
    //create output array
    let mapped = [];
    //determine if the input collection is an aray
    if (Array.isArray(collection)) {
        //iterate though the array using  for loop
        for (var i = 0; i < collection.length; i++)
            /*invoke the input/callback function on the current element of
            the array, the current index*/
            //and the array itself
            mapped.push(func(collection[i], i, collection));
    } else {
        //else the input collection is an object
        //iterate though the object using a for loop
        for (var key in collection) {
            let result = func(collection[key], key, collection);
            mapped.push(result);
        }
    }
        return mapped;
};
 
module.exports.map = map;
 
/**
 * pluck: function that takes in an array of objects and a target property that is in each object.  
 * Then returns an array of values of the target property of each object.
 *
 * @param {array of objects}: map through objects in the array
 * @param {value of property}: properrty of every element in the array
 * @return {array}: an array each object's values of the target property
 */
 
 function pluck(array, prop) {
    var plucked = _.map(array, function(object) {
    //Return an array containing the value of <property> for every element in <array>
        return object[prop];
    });
        return plucked;
    };
   
module.exports.pluck = pluck;
 
/**
 * every: function that iterates through every element. If the elements returns true when passed into the tester function,,,,,,
 * the function returns true. Otherwise it returns false.
 *
 * @param {collection}: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the
 * collection
 * @return {boolean}: return true for every element returns true when passed into the tester function
 */
 
 function every(collection, func) {
    //determine if the func is undefined
    if (func === undefined) {
        //determine if the input collection is an array
        if (Array.isArray(collection)) {
            //iterate through collection
            for (let i = 0; i < collection.length; i++) {
                if (!collection[1]) { // if the current value in the array is falsey
                    return false;
                }
            }
        } else { //else it is not an array
            //iterating though collection as an object
            for (let key in collection) {
                if (!collection[key]) {
                    return false;
                }
            }
        }
    } else { //else it is defined
        //determine if collection is an array  iterate though collection using for loop
        if(Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (func(collection[i], i, collection)=== false) { // pass the current vvalue, current index, collection
                return false;
                }
             }
        }
 
    }
    return true;
};
 
module.exports.every = every;
 
/**
 * some: function that iterates through an collection and returns true if the
 * collection has atleast 1 of the elements returns true when passed into the tter function.
 *
 * @param {collection}: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the
 * collection
 * @return {boolean}: return true if atleast 1 element returns true when passed into the input tester function
 */
 
 function some(collection, func) {
    //determine if func has been passed in
    if (test === undefined) {
        // if it is an array check if any of the values equal truthy. if so return true
    if (_.typeOf(collection) === "array") {
        for (var i = 0; i < collection.length; i++) {
            // else return false
            if (collection[i]) {
                return true;
            } else {return false}
        }
    } else {
        // if it is an object check if any values equal truthy. if so return true
        for (var key in collection) {
            // else return false
            if (collection[key]) {
                return true;
            } else {
                return false;
            }
        }
    }
    } else {
    if (_.typeOf(collection) === "array") {
        for (var i = 0; i < collection.length; i++) {
            if (test(collection[i], i, collection) === true) {
                return true
            }
        }
    } else {
        for(var key in collection) {
            if (test(collection[key], key, collection) === true) {
                return true
            }
        }
    }
    }
    return false
}
 
    module.exports.some = some;
 
/**
 * reduce: callback function iterates through an array and calls the callback  function to accumulate a single return value
 *
 * @param {array}: The collection over which to iterate.
 * @param {func} action: The Function to be applied to each value in the
 * collection
 * @param {seed}: initial value, previous result
 * @return {value}: accumulation of values from the final function call of the callback function
 */
 
 function reduce(array, func, seed) {
    //create accummulator variable
    let accumulator
    //determine if seed was not passed in
    if (seed === undefined) {
         accumulator = array[0];
         //"continue to the next element and iterate though the input array"
         for (let i = 1; i < array.length; i++) {
             accumulator = func(accumulator, array[i], i, array);
         }
    } else {  //else seed waas passed in
        accumulator = seed;
        for (let i =0; i < array.length; i++) {
            accumulator = func(accumulator, array[i], i, array);
        }
    }
    return accumulator;
 };
 
 module.exports.reduce = reduce;
 
 /**
 * extend: takes in two  or more input objects, merges/copies the values of the objects and uses them in the trget object. 
 * @param {object}: destination object
 * @param {multiple objects}: source objects
 * @return {object}:  it returns a copy all of the properties of the source objects over 
 * the destination object, and return the destination object modified 
 */
  function extend(...inputs) { // spread operator takes all of hte objects and puts them in an array
    //copy properties from object 1 to object 2
    var extendedObj = Object.assign(...inputs);
    return extendedObj;
   };
   module.exports.extend = extend;
 
