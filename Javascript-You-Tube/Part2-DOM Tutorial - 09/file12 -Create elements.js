// document.createElement() = 114
// append
// prepend
// remove

// const newTodoItem = document.createElement("li");
// console.log(newTodoItem);
// const newTodoItemText = document.createTextNode("Teach Students");
// newTodoItem.textContent = "Teach Students";
// console.log(newTodoItemText);
// const todoList = document.querySelector(".todo-list");
// newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);

// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1)


// before 
// after

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students";
const todoList = document.querySelector(".todo-list");
todoList.before(newTodoItem);
todoList.after(newTodoItem);