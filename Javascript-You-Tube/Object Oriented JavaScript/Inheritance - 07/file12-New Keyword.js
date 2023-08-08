// New Keyword
// New key word will have 
// 1. empty object this = {}
// 2. return this.

function createUser(firstName, age){
  this.firstName = firstName;
  this.age = age;
}
createUser.prototype.about = function(){
  console.log(this.firstName, this.age);
}

const user1 = new createUser("Ashish", 32);
user1.about();

//  My RND

// class createUser {
//   constructor(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
//   }
//   about() {
//     console.log(this.firstName, this.age);
//   }
// }

// const user1 = new createUser("Ashish", 32);
// user1.about();