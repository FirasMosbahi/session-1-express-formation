/**
 * destruction in ES6 arrays
 */
console.log("--------------------destruction in arrays---------------------------")

const numbers = [1, 2, 3, 4, 5];

const [first, last] = numbers;
console.log("first",first);
console.log("last" , last)

const [first ,second, ...rest] = numbers;
console.log("first",first);
console.log("second",second)
console.log("rest",rest);