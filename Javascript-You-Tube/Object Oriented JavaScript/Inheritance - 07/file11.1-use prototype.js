// use prototype= 82


// const userMethod = {
//   about : function(){
//     return `${this.firstName} is ${this.age} years old`;
//   },

//   is18 : function(){
//     return this.age >= 18;
//   },

//   sing : function(){
//     return 'thuuuuu nnnnaaaa naaaa'
//   }
// }

function createUser(firstName, lastName, email, age, address){
  const user = Object.create(createUser.prototype); // Creating this line empty obj creating property value {}
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  // user.about = userMethod.about;
  // user.is18 = userMethod.is18;
  // user.sing = userMethod.sing;
  return user;
}

  createUser.prototype.about = function(){
      return `${this.firstName} is ${this.age} years old`;
    };
  
  createUser.prototype.is18 = function(){
    return this.age >= 18
  };

  createUser.prototype.sing = function(){
    return 'thuuuu nannnanan naaa'
  };


const user1 = createUser('Ashish', 'Devakate', 'samdisilvaashish@gmail.com', 32, 'my Home');
const user2 = createUser('Ash', 'Devakate', 'samdisilvaashish@gmail.com', 21, 'my Home');
const user3 = createUser('ish', 'Devakate', 'samdisilvaashish@gmail.com', 12, 'my Home');

console.log(user1);
console.log(user1.sing());

