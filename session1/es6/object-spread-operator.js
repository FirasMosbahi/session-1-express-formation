/**
 * the spread operator in objects
 */
console.log("--------------------spread operator in objects---------------------------")

let firas = { name: "Firas", age: 21, job: "BackEnd Developer" };
// const { email = "firas@gmail.com" } = firas;
let email = {email : "firas@gmail.com"}
firas = { age : 22,...firas , ...email}

console.log("firas" , firas)