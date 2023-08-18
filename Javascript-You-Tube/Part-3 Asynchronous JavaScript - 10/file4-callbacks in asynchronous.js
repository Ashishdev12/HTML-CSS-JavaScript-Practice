// Callbacks in asynchronous programming = 133
// Callback Hell and Pyramid of doom

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


// call back hell

// setInterval(()=>{
//   heading1.textContent = "Heading 1"
//   heading1.style.color = "violet";

//   setInterval(()=>{
//     heading2.textContent = "Heading 2"
//     heading2.style.color = "pink";

//   setInterval(()=>{
//     heading3.textContent = "Heading 3"
//     heading3.style.color = "blue";

//     setInterval(()=>{
//       heading4.textContent = "Heading 4"
//     heading4.style.color = "orange";

//     setInterval(()=>{
//       heading5.textContent = "Heading 5"
//     heading5.style.color = "red";
  

//     setInterval(()=>{
//       heading6.textContent = "Heading 6"
//     heading6.style.color = "violet";
    

//     setInterval(()=>{
//       heading7.textContent = "Heading 7"
//     heading7.style.color = "blue";
//             },1000)
//            },1000)
//          },1000)
//         },1000)
//        },1000)
//      },1000)
//    },1000);


function changeText(element, text, color, time){
  setTimeout(()=>{
    element.textContent = text;
    element.style.color = color;
  }, time)
}

changeText(heading1, "one", "violet", 3000);

