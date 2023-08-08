//  First sol to that problem = 78

const userMethod = {
  about : function(){
    return `${this.firstName} is ${this.age} years old`;
  },

  is18 : function(){
    return this.age >= 18;
  }
}

function creatUser(firstName, lastName, email, age, address){
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethod.about;
  user.is18 = userMethod.is18;

  return user;
}

const user1 = creatUser('Ashish', 'Devakate', 'samdisilvaashish@gmail.com', 32, 'my Home');
const user2 = creatUser('Ash', 'Devakate', 'samdisilvaashish@gmail.com', 2, 'my Home');
const user3 = creatUser('ish', 'Devakate', 'samdisilvaashish@gmail.com', 12, 'my Home');

console.log(user1.about());
console.log(user2.about());