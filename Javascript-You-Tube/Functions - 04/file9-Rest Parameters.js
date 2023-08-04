// Rest Parameters = 52

// function addAll(a, b, ...c){
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log(`c is`, c);
// }

// addAll(1,2,3,4,5,6,7,8);

// I did this one

// function addNumber(...numbers){
//   return a + b + c
// }

// const ans = addNumber(1,2,3);
// console.log(ans);

function addAll(...numbers){
  let total = 0;
  for(let number of numbers){
    total = total + number
  }
  return total;
}

const ans = addAll(4,5,4)
console.log(ans);