//  Closure = 98
// closure : 30-40%
// analyses : 70-80%
// real example : 100%

// function can return function

function outerFunction(){
  function innerFunction(){
    console.log("Hello World!")
  }
  return innerFunction;
}

const ans = outerFunction();
// console.log(ans);
ans();


function printFullName(firstName, lastName){
  function printName(){
    console.log(firstName, lastName)
  }
  return printName;
}

const answ = printFullName('Ashish', 'sindhu');
// console.log(ans);
answ();
