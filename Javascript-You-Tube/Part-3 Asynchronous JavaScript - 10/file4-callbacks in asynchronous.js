// Callbacks in asynchronous programming = 133
// Callback Hell and Pyramid of doom

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


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


function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
  setTimeout(()=>{
    if(element){
    element.textContent = text;
    element.style.color = color;  
    if(onSuccessCallback){
      onSuccessCallback();
    }
   
    }else{
      if(onFailureCallback){
        onFailureCallback();
      }
    }
    
  }, time)
}

// pyramid of doom

changeText(heading1, "one","violet",1000,()=>{
  changeText(heading2, "two","purple",2000,()=>{
    changeText(heading3, "three","red",1000,()=>{
      changeText(heading4, "four","pink",1000,()=>{
        changeText(heading5, "five","green",2000,()=>{
          changeText(heading6, "six","blue",1000,()=>{
            changeText(heading7, "seven","brown",1000,()=>{
              changeText(heading8, "eight","cyan",1000,()=>{
                changeText(heading9, "nine","#cda562",1000,()=>{
                  changeText(heading10, "ten","dca652",1000,()=>{
                    
                  },()=>{console.log("Heading10 does not exist")})
                },()=>{console.log("Heading9 does not exist")})
              },()=>{console.log("Heading8 does not exist")})
            },()=>{console.log("Heading7 does not exist")})
          },()=>{console.log("Heading6 does not exist")})
        },()=>{console.log("Heading5 does not exist")})
      },()=>{console.log("Heading4 does not exist")})
    },()=>{console.log("Heading3 does not exist")})
  },()=>{console.log("Heading2 does not exist")})
},()=>{console.log("Heading1 does not exist")})