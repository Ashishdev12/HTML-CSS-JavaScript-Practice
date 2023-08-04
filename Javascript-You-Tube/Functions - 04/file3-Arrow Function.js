// Arrow Function
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

const singHappyBirthday = () => {
  console.log("happy birthday to you ......");
}

//  singHappyBirthday();

const sumThreeNumbers = (number1, number2, number3) => {
  return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,4);
//  console.log(ans);


// function isEven(number){
//     return number % 2 === 0;
// }
const isEven = (number) => {
  return number % 2 === 0;
}
//  console.log(isEven(2));

const firstChar = (anyString) => {
  return anyString[0];
};
// console.log(firstChar("Ashish"));


const findTarget = (array, target) => {
  for(let i = 0; i<array.length; i++){
      if(array[i]===target){
          return i;
      }
  }
  return -1;
}

const myArray = [2,3,7,9,90];
const ansr = findTarget(myArray, 90)
console.log(ansr);

