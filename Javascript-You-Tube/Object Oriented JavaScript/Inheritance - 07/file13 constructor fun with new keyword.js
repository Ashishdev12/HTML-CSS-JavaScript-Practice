// Constructor function with new Keyword = 83


// constructor function 
function createUser(firstName, lastName, email, age, address){
  // const user = Object.create(createUser.prototype);
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address
}
createUser.prototype.about = function(){
  return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function (){
  return this.age >= 18; 
}
createUser.prototype.sing = function (){
  return "la la la la ";
}


const user1 = new createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");

console.log(user1);
console.log(user1.about());