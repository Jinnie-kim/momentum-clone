'use strict';

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

let todos = [];

todoForm.addEventListener('submit', hadnleTodoSubmit);

function hadnleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    button.addEventListener('click', deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function deleteTodo(event) {
    const button = event.target.parentElement;
    const li = button.parentElement;
    li.remove();
    todos = todos.filter((todo) =>  todo.id != parseInt(li.id));
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

const savedTodos = localStorage.getItem(TODOS_KEY); 


if(savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos; 
    parsedTodos.forEach(paintTodo);
}

