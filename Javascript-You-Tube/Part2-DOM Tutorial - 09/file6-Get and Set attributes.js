// get and set attributes = 107

const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href", "https://www.interviewbit.com/javascript-interview-questions/");
console.log(link.getAttribute("href"));



// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));