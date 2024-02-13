//This operation is illegal because typescript can be strictly typed
//const x : number = "g"

//This op is legal now
const x : number = 12

// declaring an array in ts
const array = ["test" , 25 , true]

//decaring a typed array
const atyped_array : string[] = ["test" , "25" , "true"]

// the any type
let any_var : any = 5
any_var = true
any_var = 'hello i am any'

//multi-types variables
let multi : number | boolean = true
multi = 5
//this is illegal
//multi = "5"

//defining a custom type
type custom_type = number | string | boolean
let c : custom_type = 5
c = true
c = "true"

//enums in ts
enum States {
    WAITING,
    ACTIVE,
    SUSPENDED,
    DONE,
}

let e : States = States.WAITING
e = States.ACTIVE
e = States.SUSPENDED
e = States.DONE

console.log("typescript file compiled and executed")