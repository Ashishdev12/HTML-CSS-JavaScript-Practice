//  Class Keyword = 86

class createUser{
  constructor(firstName, lastName, email, age, address){
    console.log("AShish called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about(){
    return `${this.firstName} is ${this.age} years old.`;
  };
  is18(){
    return this.age >= 18; 
  };
  Sing(){
    return "la la la la ";
  }
}

const user1 = new createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");