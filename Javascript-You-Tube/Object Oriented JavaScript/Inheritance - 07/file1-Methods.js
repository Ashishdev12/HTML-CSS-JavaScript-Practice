//  Methods = 71

function personInfo(){
  console.log(`Hi my name is ${this.firstName} and my age is ${this.age}`)
}

const person1 = {
  firstName: 'Ashish',
  age: 32,
  about: personInfo
}

const person2 = {
  firstName: 'sindhu',
  age: 31,
  about: personInfo
}
const person3 = {
  firstName: 'sandeep',
  age: 39,
  about: personInfo
}

person1.about();
person2.about();
person3.about();