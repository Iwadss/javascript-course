//  Main Idea of JavaScript 
// 1. save the data
// 2. ganerate the html
// 3. make it interactive 


const todoList = ['make dinner', 'wash dishes'];

renderTodoList()

function renderTodoList() {


    let todoListHTML = ''

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i]
        const html = `<p>${todo}</p>` // generating the HTML
        todoListHTML += html

    }
    console.log(todoListHTML)

    document.querySelector('.js-todo-list').innerHTML = todoListHTML

}

function addTodo() {
    // Select the input element from the HTML using its class name 'js-name-input'
    const inputElement = document.querySelector('.js-name-input');

    // Get the value entered by the user in the input field
    const name = inputElement.value;
    //console.log(name);

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';

    renderTodoList()
}




const toList2 = [];

function addTodo2() {
    const inputElement = document.querySelector('.js-second-name-input');
    const name = inputElement.value;
    console.log(name);

    document.querySelector('.js-list-task').innerHTML = `${name}`;

}