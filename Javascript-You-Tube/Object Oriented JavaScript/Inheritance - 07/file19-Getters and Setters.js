//  Getters and setters = 90

class person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName(){
    return `Hi my name is ${this.firstName} ${this.lastName}`
  }

  set fullName(fullName){
    const [firstName, lastName] = fullName.split(' ');
  // setName(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new person('Ashish', 'kumar', 32);
// console.log(person1.fullName());
// console.log(person1.fullName);
// console.log(person1.firstName);
// console.log(person1.lastName);
// // person1.setName('sindhu', 'toopran');

// console.log(person1.firstName);
// console.log(person1.lastName);

person1.fullName = "devakate Ashish";
console.log(person1);

