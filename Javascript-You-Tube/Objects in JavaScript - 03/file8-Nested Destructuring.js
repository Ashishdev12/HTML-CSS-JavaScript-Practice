// nested destructuring

const users = [
  {
    userId: 1,
    firstName: "Ashish",
    gender: "male"
  },
  {
    userId: 2,
    firstName: "Kumar",
    gender: "male"
  },
  {
    userId: 3,
    firstName: "Devakate",
    gender: "male"
  },
]


// const[user1, use2, user3] = users;
const[{firstName:user1firstName, userId}, , {gender:user3gender}] = users
console.log(user1firstName, userId);
console.log(user3gender)