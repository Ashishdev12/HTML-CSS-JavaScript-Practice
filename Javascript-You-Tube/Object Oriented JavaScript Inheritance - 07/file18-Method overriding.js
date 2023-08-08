// Method overriding = 89

class Animal {
  constructor(name,age){
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

class Dog extends Animal{
  constructor(name,age, speed){
    super(name, age);
    this.speed = speed;
  }

  eat(){
    return `Modified Eat : ${this.name} is eating`
  }

  run(){
    return`this ${this.name} is running at ${this.speed}kmph and the dog age is ${this.age}`
  }
}

// object / instance / same

// const tommy = new Dog("tommy", 3,45);
// console.log(tommy.run());
// console.log(tommy.eat());

const animal1 = new Animal('Tiger', 2);
console.log(animal1.eat());