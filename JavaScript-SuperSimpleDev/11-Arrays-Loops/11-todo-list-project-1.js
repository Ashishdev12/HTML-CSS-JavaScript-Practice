const todoList = [{
  name: 'make dinner',
  dueDate: '16-06-2023'
}, {
  name: 'wash dishes',
  dueDate: '16-06-2023'
}];
renderTodoList();

function renderTodoList() {


  // store the result adding the loop which we made thru the loop.
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;

    const { name, dueDate } = todoObject;

    // <!--generating the html using the JS-->
    const html = `
    <div>${name}</div>
    <div>${dueDate} </div>

    <button onClick = "
    todoList.splice(${i}, 1);
    renderTodoList();
    
    " class= "delete-todo-button">Delete</button>  
    
  `;                                                            // display html in the console 

    todoListHTML += html;                                       // Accumulator pattern 

  }

  // console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name, 
    // dueDate: dueDate
    name,
    dueDate
  });


  //  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}

