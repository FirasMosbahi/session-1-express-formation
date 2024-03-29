/**
 * map method
 */

const x = [1,1,5,7,1,10]

let pow2x = x.map((number) => number**2)

console.log("pow2x : ",pow2x)

/**
 * filter method
 */
let oddX = x.filter(x => x % 2 === 1)
console.log("oddX : " , oddX)

/**
 * find method
 */
let isContainingDividableBy4 = x.find(number => number % 4 === 0)
console.log("contains dividable by 4" , isContainingDividableBy4)