function greeting(name) {
    return `hello ${name}`
}

/**
 *arrow functions
 */
const arrowGreeting = (name) => `hello ${name} with arrow functions`

/**
 * default values
 */
function greetingWithDefaultValues(name = "world") {
    return `hello ${name}`
}

console.log(greeting("firas"))

console.log(arrowGreeting("firas"))

console.log("default value greeting : " , greetingWithDefaultValues())
console.log("custom value greeting : " , greetingWithDefaultValues("firas"))