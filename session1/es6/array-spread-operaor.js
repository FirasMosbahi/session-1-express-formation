/**
 * the spread operator in arrays
 */
console.log("--------------------spread operator in arrays---------------------------")
let t = [5 , "hello" , true]

let [x,y,z] = t

const t2 = [5 , ...t]

// console.log("t is : ",t)
// console.log("x is :" ,x)
// console.log("y is :" ,y)
// console.log("z is :" ,z)
//
// console.log("t2 is :" , t2)

console.log(t)
console.log(...t)