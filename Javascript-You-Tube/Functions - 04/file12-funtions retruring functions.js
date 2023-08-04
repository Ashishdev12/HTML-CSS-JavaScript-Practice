// function returning function = 55
function myFunc(){

  function hello(){
    return "hello world";
  }
  
  return hello;
}

const ans = myFunc();
console.log(ans());