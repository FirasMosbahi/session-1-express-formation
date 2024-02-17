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

modulud3(7)
modulud3("f")