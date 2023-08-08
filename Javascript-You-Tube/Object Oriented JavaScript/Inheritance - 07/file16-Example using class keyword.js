//  Example of class = 87

class Animal{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  eat(){
    return `${this.name} is eating`;
  }

  isSuperCute(){
    return this.age <= 1;
  }

  isCute(){
    return true;
  }
}

// const animal1 = new Animal('Tiger', 1);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());
// console.log(animal1.isCute());

//  dog class

class Dog extends Animal{

}

const Tommy = new Dog('tommy', 3);
console.log(Tommy.isCute());