/**
 * iteration over an array
 */

console.log("this is a basic example for iteration over an array")
const array = ['hello' , 'world' , 25]
for (let i = 0 ; i < array.length ; i++){
    console.log(array[i])
}

console.log("this is good but there is a better alternative")
for (const value of array){
    console.log(value)
}
