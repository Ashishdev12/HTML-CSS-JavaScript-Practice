//  example - 3 = 101

function func(){
  let counter = 0;
  return function(){
    if(counter < 1){
      console.log('hello Ashish You called me');
      counter ++;
    } else {
      console.log('Hi I already gave you call please check you mobile');
    }
  }
}

const myFunc = func();
myFunc();
myFunc();
myFunc();