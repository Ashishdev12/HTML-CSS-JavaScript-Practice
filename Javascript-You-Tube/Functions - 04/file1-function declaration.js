// 44 - function declarations

// function singHappyBirthday() {
//   console.log("Happy Birthday Ashish Kumar....")
// };

// singHappyBirthday();
// ----------------------------------------------------------

// reusable Function - Basic function

// function sumTwoNumbers(number1, number2) { 
//     return number1 + number2;
// }

// const returnedValue = sumTwoNumbers(4, 18);
//   console.log(returnedValue); 
// --------------------------------------------------------------

// isEven
// input : 1 number
// output : true, false

// function isEven(number) {
//   if(number % 2 === 0) {
//     return true;
//   } 
//   // else {
//   //   return false;
//   // }
//   return false;
// }

// console.log(isEven(6)); 
// -------------------------------------------------------

 // function 
// input : string 
// output: firstCharacter 

// function firstCharacter(anyString) {
//   return anyString[0];
// }

// console.log(firstCharacter("Ashish"));
// ----------------------------------------------------------

// function 
// input : array, target (number)
// output: index of target if target present in array 

function findTarget(array, target) {
  for(let i = 0; i<array.length; i++){
    if(array[i]===target){
      return i;
    }
  }
  return -1;
}
const myArray = [1,2,5,9,90]
const ans = findTarget(myArray, 90);
console.log(ans);