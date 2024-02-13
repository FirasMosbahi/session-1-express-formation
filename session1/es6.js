/**
 * the spread operator in arrays
 */
console.log("--------------------spread operator in arrays---------------------------")
let t = [5 , "hello" , true]

let [x,y,z] = t

const t2 = [5 , ...t]

console.log("t is : ",t)
console.log("x is :" ,x)
console.log("y is :" ,y)
console.log("z is :" ,z)

console.log("t2 is :" , t2)

/**
 * the spread operator in objects
 */
console.log("--------------------spread operator in objects---------------------------")

let firas = { name: "Firas", age: 21, job: "BackEnd Developer" };
const { email = "firas@gmail.com" } = firas;
firas = {...firas , ...email}

console.log("firas" , firas)

/**
 * destruction in ES6 arrays
 */
console.log("--------------------destruction in arrays---------------------------")

const numbers = [1, 2, 3, 4, 5];

const [first, last] = numbers;
console.log("first",first);
console.log("last" , last)

const [first ,second, ...rest] = numbers;
console.log("first",first);
console.log("second",second)
console.log("rest",rest);


/**
 * destruction in ES6 objects
 */
console.log("--------------------destruction in objects---------------------------")

const firas = { name: "Firas", age: 21, job: "BackEnd Developer" };

const { name, age } = firas;
console.log(name);
console.log(age);

const { job: profession } = firas;
console.log(profession);

const { email = "firas@gmail.com" } = firas;
console.log(email);