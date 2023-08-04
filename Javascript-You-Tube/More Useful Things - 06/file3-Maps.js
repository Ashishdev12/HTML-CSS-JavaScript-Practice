// Maps = 68
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 
// ----------------------------------------------------------------------------
// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "Ashish",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair 
// const person = new Map();
// person.set('firstName', 'Ashish');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// for(let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key, value)
// }
// ---------------------------------------------------------------------------------------

const person1 = {
  id: 1,
  firstName: "Ashish"
}

const person2 = {
  id: 2,
  firstName: "Sindhu"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 32, gender: "male"});
extraInfo.set(person2, {age: 30, gender: "female"});
// console.log(extraInfo);
console.log(person1.id);
console.log(person2.id)
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);

