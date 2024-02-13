/**
 * Short tutorial about arrays in JS
 */

let x = [5 , "hello" , true , 5.02]

console.log("the length of x is : " , x.length)
console.log("the 4 th element in x is : " , x[3])

/**
 * add and get from an array
 */

x.push("added item")
console.log("new ")
console.log(x)

/**
 * pop will delete the last item from the array and return it as a result
 */
console.log(x.pop())
console.log(x)
