/**
 * This is a short introduction to strings in javascript
 */

const x = "hello"

let y = "hello" + " " + "world"

console.log("the value of y is ")
console.log(y)

/**
 * useful methods :
 */

console.log("the length of x is :" , x.length)

console.log("the uppercase version of x is : " , x.toUpperCase())

const z = "HELLO"

console.log("the lowercase version of z is : " , z.toLowerCase())

console.log("did x contains the h caracter : " , x.includes("h"))
console.log("did x contains the z caracter : " , x.includes("z"))

console.log("what is the index of the caracter h in x : " , x.indexOf("h"))
console.log("what is the index of the caracter z in x : " , x.indexOf("z"))

//important : here we use 3 instead of 4 because the indexes in JS starts from 0
console.log("what is the value of the 4 th caracter of x" , x[3])

/**
 * Formatted strings
 */

console.log("what are the formatted strings")
console.log(`the length of the string ${x} is ${x.length}`)