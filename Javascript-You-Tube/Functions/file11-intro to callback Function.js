// call back Function

function myFun2(name){
  console.log("I am inside function")
  console.log(`my name is:${name}`)
}

function myFunc(callback){
  console.log("Ashish Kumar welcome");
  callback("Ashish");
}

myFunc(myFun2);