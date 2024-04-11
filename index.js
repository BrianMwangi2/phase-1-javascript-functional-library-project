// Collection Functions (Arrays or Objects)

// Helper function to determine if a variable is an array
function isArray(obj) {
    return Array.isArray(obj);
  }
  
  function myEach(collection, callback) {
    if (isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
  
    myEach(collection, (value, key, collection) => {
      result.push(callback(value, key, collection));
    });
  
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let start = acc;
  
    myEach(collection, (value, key, collection) => {
      if (start === undefined) {
        start = value;
      } else {
        start = callback(start, value, collection);
      }
    });
  
    return start;
  }
  
  function myFind(collection, predicate) {
    let result;
  
    myEach(collection, (value, key, collection) => {
      if (result === undefined && predicate(value, key, collection)) {
        result = value;
        return false; // Stop iterating by returning false
      }
    });
  
    return result;
  }
  
  
  
  function myFilter(collection, predicate) {
    const result = [];
  
    myEach(collection, (value, key, collection) => {
      if (predicate(value, key, collection)) {
        result.push(value);
      }
    });
  
    return result;
  }
  
  function mySize(collection) {
    if (isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Array Functions
  
  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // Object Functions
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return myMap(object, (value) => value);
  }
  
  // Test cases
  console.log(myEach([1, 2, 3], alert)); // Alerts each number in turn and returns [1, 2, 3]
  console.log(myEach({one: 1, two: 2, three: 3}, alert)); // Alerts each number value in turn and returns {one: 1, two: 2, three: 3}
  console.log(myMap([1, 2, 3], function(num){ return num * 3; })); // [3, 6, 9]
  console.log(myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; })); // [3, 6, 9]
  console.log(myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10)); // 16
  console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; })); // 6
  console.log(myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })); // 2
  console.log(myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; })); // 4
  console.log(myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })); // [2, 4, 6]
  console.log(myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })); // []
  console.log(mySize({one: 1, two: 2, three: 3})); // 3
  console.log(mySize([])); // 0
  console.log(myFirst([5, 4, 3, 2, 1])); // 5
  console.log(myFirst([5, 4, 3, 2, 1], 3)); // [5, 4, 3]
  console.log(myLast([5, 4, 3, 2, 1])); // 1
  console.log(myLast([5, 4, 3, 2, 1], 3)); // [3, 2, 1]
  console.log(myKeys({one: 1, two: 2, three: 3})); // ["one", "two", "three"]
  console.log(myValues({one: 1, two: 2, three: 3})); // [1, 2, 3]
  