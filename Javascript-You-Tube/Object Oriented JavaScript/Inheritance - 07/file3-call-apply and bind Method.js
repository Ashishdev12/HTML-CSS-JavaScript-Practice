// Call , apply and bind method = 73

const user1 = {
  firstName: "Ashish",
  age: 32,
  about: function(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician)
  }
}

const user2 = {
  firstName: "sindhu",
  age: 22,
 
}


// user1.about.call(user2,"guitar","Ashish");

// user1.about.apply(user2, ["guitar", "Trum"]);

const func = user1.about.bind(user1, "guitor", "bach");
func();