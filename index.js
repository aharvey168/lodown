'use strict';

// YOU KNOW WHAT TO DO //



/**identity: function takes in any value as an argument and returns that value unchanged
*@param { any value} value: Function takes in any value as an Input
*@returns {any value }
**/
function identity(value) {
    return value;
};
module.exports.identity = identity;

/**
 * indexOf: Function searches through the array and returns the index of an input value;
 * @param {Array} collection: Function takes in an input value
 * @param {any value}: Function could take in a number, strin, or boolean
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
module.exports.indexof = idexOf;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
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
 * map: 
 * 
 * @param {} 
 * @param {F} 
 */
function map(collection,func) {
    //create output array
    let mapped = [];
    //determine if the inout collection is an aray
    if (Array.isArray(collection)) {
        //iterate though the array using  for loop
        for (var i = 0; i< collection.length; i++)
            //invoke the inout function on the current element of the array, the current index, 
            //and the array
            let result = func(collection[i], i, collection)
            mapped.push(result);
    } else {
        //else the inout collection is an object
        //iterate though the object using a for loop
        for (var key in collection) {
            let result = func(collection[key], key, collection);
            mapped.push(result);
        }
    }
        return mapped;
};
module.exports.map = map;