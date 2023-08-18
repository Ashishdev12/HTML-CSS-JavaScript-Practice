//  understanding callbacks = 132

// function myFunc(callback){
//   console.log("Function is doing task 1");
//   callback();
// }

// myFunc(()=>{
//   console.log("Function is doing task 2");
// });

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure){
  // console.log(number1, number2);
  if(typeof number1 === "number" && typeof number2 === "number"){
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}

function addTwoNumbers(num1, num2) { 
  console.log(num1 + num2);
}

function onFail(){
  console.log("wrong data type");
  console.log("please pass numbers only");
}
getTwoNumbersAndAdd(4, 4, addTwoNumbers, onFail);
