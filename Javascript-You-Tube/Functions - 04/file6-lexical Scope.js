//  lexical Scope = 49

const myVar = "value1";

function myApp(){


  function myFunc() {
    // const myVar = "value59";
    const myFunc2 = () => {
      console.log("inside my Func", myVar);
    }
   
    myFunc2();
  }


  console.log(myVar);
 myFunc();

}

myApp();