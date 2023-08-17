//  129

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
// console.log(todoInput);

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
  <span class="text">${newTodoText}</span>
  <div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
  </div>`
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";
});


todoList.addEventListener("click", (e)=>{
  // console.log(e.target);
  // Check if user clicked on done button
  // console.log(e.target.classList);
  if(e.target.classList.contains("remove")){
    // console.log("You want to remove me");
    const targetLi = e.target.parentNode.parentNode;
    targetLi.remove();
    
  }

  if(e.target.classList.contains("done")){
    // console.log("You want me to add");
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});

