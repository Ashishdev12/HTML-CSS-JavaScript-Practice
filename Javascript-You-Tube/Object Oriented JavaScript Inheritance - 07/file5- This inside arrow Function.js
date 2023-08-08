// arrow functions  = 75

const user1 = {
  firstName : "Ashish",
  age: 8,
  about: () => {
    console.log(this.firstName, this.age);
  }
}

user1.about(user1);