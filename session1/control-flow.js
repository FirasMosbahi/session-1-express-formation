function gentleGreeting(object) {
    if(object.gender === "male") console.log("hello gentleman")
    if(object.gender === "female") console.log("hello my lady")
}

function isGreaterThan10(number){
    if(number > 10) return true
    else {
        return false
    }
}

function modulud3(number) {
    switch (number % 3) {
        case 0 :
            console.log(`${number} modulus 3 is 0`)
            break
        case 1 :
            console.log(`${number} modulus 3 is 1`)
            break
        case 2 :
            console.log(`${number} modulus 3 is 2`)
            break
        default :
            console.log("input is not a number")
    }
}

gentleGreeting({gender : "male"})

console.log(isGreaterThan10(15))
console.log(isGreaterThan10(2))
modulud3(7)
modulud3("f")