// Event Bubbling = 128

// console.log("Hello World!!");

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// // Capture events(Capturing) ----------------------------------------------------------------
// child.addEventListener("click", () => {
//   console.log("you Captured");
// },true);
// parent.addEventListener("click", () => {
//   console.log("you Captured parent");
// },true);
// grandparent.addEventListener("click", () => {
//   console.log("you Captured grandparent");
// },true);
// document.body.addEventListener("click", () => {
//   console.log("you Captured on document.Body");
// },true);



// // No Capture (Bubbling)---------------------------------------------------------------------

// child.addEventListener("click", () => {
//   console.log("you Clicked me");
// });
// parent.addEventListener("click", () => {
//   console.log("you Clicked parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("you Clicked grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("you Clicked on document.Body");
// });

// event delegation -----------------------------------------------------------

grandparent.addEventListener("click", (e)=>{
  console.log(e.target);
})