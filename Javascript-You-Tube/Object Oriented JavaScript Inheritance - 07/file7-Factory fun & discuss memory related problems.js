// Factory functions & discuss some memory related problems = 77

// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 


// const user = {
//   firstName : 'Ashish',
//   lastName : 'devakate',
//   email : "samdisilvaashish@gmail.com",
//   age : 32,
//   address: "House Number, Colony, pincode, state",
//   about : function() {
//     return `${this.firstName} is ${this.age} years old`;
//   },

//   is18: function(){
//     return this.age >= 18;
//   }
// }

// const aboutuser1 = user.about();
// console.log(aboutuser1);
// -----------------------------------------------------------------------------------------------

function creatUser(firstName, lastName, email, age, address){
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function(){
    return `${this.firstName} is ${this.age} years old`;
  };

  user.is18 = function(){
    return this.age >= 18;
  }

  return user;
}

const user1 = creatUser('Ashish', 'Devakate', 'samdisilvaashish@gmail.com', 32, 'my Home');
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);