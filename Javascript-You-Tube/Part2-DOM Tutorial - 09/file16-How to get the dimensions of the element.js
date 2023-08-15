//  how to ger the dimension of element

// height width

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect().width;
console.log(info);