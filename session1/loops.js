/**
 * the for loop
 */

console.log("this is a basic example for the for loop")
for (let i = 0 ; i < 10 ; i++){
    console.log(`the current number is : ${i}`)
}
console.log("------------------------------------------")


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
console.log("------------------------------------------")


/**
 * while loop
 */

console.log("this is a basic while loop")
let i = 0
while (i < 10) {
    console.log(i)
    i++
}
console.log("second example")
let j = 10
while (j < 10) {
    console.log(j)
    j++
}

console.log("------------------------------------------")
console.log("this is a basic do..while loop example")
let i2 = 0
do {
    console.log(i2)
    i2++
}while (i2 < 10)
console.log("second example")
let j2 = 10
do {
    console.log(j2)
    j2++
}while (j2 < 10)