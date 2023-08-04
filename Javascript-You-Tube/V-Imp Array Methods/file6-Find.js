// find method  = 61

// const myArray = ["Hello", "cat", "dog", "lion"];

// const ans = myArray.find((string)=>{
//   return string.length === 3;
// })

// console.log(ans);
// ----------------------------------------------------------------------------------------------

const users = [
  {userId : 1, userName: "Ashish"},
  {userId : 2, userName: "Kumar"},
  {userId : 3, userName: "Sindhu"},
  {userId : 4, userName: "Toopran"},
  {userId : 5, userName: "Sandy"},
];

const ans = users.find((user)=>{
  return user.userId === 3;
})

console.log(ans);