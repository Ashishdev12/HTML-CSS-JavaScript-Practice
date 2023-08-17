// More events = 127

const body = document.body;

// body.addEventListener("keypress", (e)=>{
//   console.log(e.key)
// });

const mainButton = document.querySelector(".btn-headline");

mainButton.addEventListener("mouseover", ()=>{
  console.log("Mouseover event accrued!!!");
})

mainButton.addEventListener("mouseleave", ()=>{
  console.log("Mouseleave event accrued!!!");
});