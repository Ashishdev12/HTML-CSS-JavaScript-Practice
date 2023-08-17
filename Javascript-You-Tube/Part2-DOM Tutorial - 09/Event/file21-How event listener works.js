// How event listener works = 124

console.log("script start !!!!!");
const allButtons = document.querySelectorAll(".my-button button");
// console.log(allButtons);

allButtons.forEach((button)=>{
  button.addEventListener("click", (event)=>{
    let num = 0;
    for(let i = 0; i<= 1000000000; i++){
      num += i;
    }
    console.log(event.currentTarget.textContent, num);
  })
});

let outerVar = 0;
for(let i = 0; i<= 1000000000; i++){
  outerVar +=i;
}
console.log("value of outer variable is ", outerVar);
console.log("script end !!!!!");