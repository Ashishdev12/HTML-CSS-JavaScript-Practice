// Some Warnings = 74

const user1 = {
  firstName: 'Ashish',
  age: 32,
  about: function(){
    console.log(this.firstName, this.age);
  }
}
// user1.about();
// don't do this mistake

const myFunc = user1.about.bind(user1);
myFunc();