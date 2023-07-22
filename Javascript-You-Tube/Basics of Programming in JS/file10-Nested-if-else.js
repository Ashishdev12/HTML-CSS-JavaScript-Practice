// Nested if else

let winningNumber = 27;
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber) {
  console.log("Your guess is right!!");
} else {
  if(userGuess < winningNumber) {
    console.log(`${userGuess} is too Low`)
  }else { 
    console.log(`${userGuess} is too High`)
  }
  }
