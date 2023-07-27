// difference between dot and bracket notation

key = "email";
const person = {
  name: "Ashish",
  age: 32,
 "person hobbies": ["guitar", "sleeping", "listening music"]
}

console.log(person["person hobbies"]);
person[key] = "ashishdevakate@gmail.com";
console.log(person);

