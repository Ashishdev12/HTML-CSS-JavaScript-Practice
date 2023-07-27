// Ojects inside array

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

for(let user of users){
  console.log(user.firstName);
}

console.log(users);