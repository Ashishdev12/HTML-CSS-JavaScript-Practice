//  Add events on Multiple elements = 122
// Add events on multiple elements = 122

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(){
//   console.log("You clicked me");
// })

const allButtons = document.querySelectorAll(".my-button Button");
// console.log(allButtons);

// for(let button of allButtons){
//   button.addEventListener("click", function(){
//     console.log(this.textContent);
//   })
// }
// --------------------------------------------------------------

// for(let i = 0; i < allButtons.length; i++){
//   allButtons[i].addEventListener("click", function(){
//     console.log(this.textContent);
//   })
// }
// -----------------------------------------------------------------

allButtons.forEach(function(button){
  button.addEventListener("click", function(){
    console.log(this);
  })
})


