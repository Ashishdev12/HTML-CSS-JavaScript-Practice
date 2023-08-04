// Important array method-forEach()

const numbers = [4,2,5,8];

// function multiplyBy2(number, index){
//     console.log(`index is ${index} number is ${number}`);
    // console.log(`${number}*2 = ${number*2}`);
// }

// multiplyBy2(numbers[0], 0);
// multiplyBy2(numbers[1], 1);

// for(let i = 0; i<numbers.length; i++){
//   // console.log(i);
//   multiplyBy2(numbers[i], i);
// }
// ----------------------------------------------------------------------------------
// numbers.forEach(function(number,index){
//   console.log(`index is ${index} number is ${number*2}`);
// });

// -----------------------------------------------------------------------------------------

// lets use realistic in day-to-day life

const users = [
  {firstName: "Ashish", age: 32},
  {firstName: "Sindhu", age: 30},
  {firstName: "sandy", age: 39},
  {firstName: "kavitha", age: 31},

];

// users.forEach(function(user){
//   console.log(user.firstName);
// });

users.forEach((user, index)=>{
    console.log(user.firstName, index);
})

// for(let user of users){
//     console.log(user.firstName);
// }