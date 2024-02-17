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