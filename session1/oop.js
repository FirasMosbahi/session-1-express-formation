class Person {
    constructor(firstName , lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    greeting() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
    isOlderThan20() {
        return this.age > 20
    }
    toString(){
        return `${this.firstName} ${this.lastName}`
    }
}

const firas = new Person("firas" , "mosbahi", 21)

console.log("name" , firas.firstName)
console.log("age" , firas.age)

firas.greeting()

console.log(firas.isOlderThan20())

console.log(firas.toString())