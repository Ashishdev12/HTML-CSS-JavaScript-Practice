//  126

const mainButton = document.querySelector("button");
const body = document.body;
const currentColor  = document.querySelector(".current-color");
// console.log(currentColor);

function randomColorGenerator(){
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red}, ${green}, ${blue})`
  // console.log(randomColor);
  return randomColor;
}

mainButton.addEventListener("click", ()=>{
  const randomColor = randomColorGenerator();
  body.style.backgroundColor = randomColor;
  currentColor.textContent = randomColor;
})