//  Map Method = 57

const numbers = [2,4,6,8,10];

// const square = function(number){
//   return number * number;
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// --------------------------------------------------------------------------------------------

// const squareNumber = numbers.map((number, index)=>{
//   return `index: ${index}, ${number * number}`
// });

// console.log(squareNumber);

// ---------------------------------------------------------------------------------------------
const users = [
  {firstName: "Ashish", age: 32},
  {firstName: "Sindhu", age: 30},
  {firstName: "sandy", age: 39},
  {firstName: "kavitha", age: 31},

];
 

const userNames = users.map((user)=>{
  return user.firstName
});

console.log(userNames);