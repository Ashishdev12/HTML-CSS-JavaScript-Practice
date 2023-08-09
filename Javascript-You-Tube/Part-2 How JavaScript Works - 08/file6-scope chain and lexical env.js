// lexical environment, scope chain = 97

const lastName = 'sindhu';

const printName = function(){
  const firstName = 'Ashish';
  function myFunction(){
    console.log(firstName);
    console.log(lastName);
  }
  myFunction()
}

printName();