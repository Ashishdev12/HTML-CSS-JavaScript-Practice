// why that sol is not that great


const userMethod = {
  about : function(){
    return `${this.firstName} is ${this.age} years old`;
  },

  is18 : function(){
    return this.age >= 18;
  },

  sing : function(){
    return 'thuuuuu nnnnaaaa naaaa'
  }
}

function creatUser(firstName, lastName, email, age, address){
  const user = Object.create(userMethod); // Creating this line empty obj creating property value {}
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

const user1 = creatUser('Ashish', 'Devakate', 'samdisilvaashish@gmail.com', 32, 'my Home');
const user2 = creatUser('Ash', 'Devakate', 'samdisilvaashish@gmail.com', 21, 'my Home');
const user3 = creatUser('ish', 'Devakate', 'samdisilvaashish@gmail.com', 12, 'my Home');

console.log(user1.about());

// console.log(user1.about());
// console.log(user2.is18());
// console.log(user1.sing());