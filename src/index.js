
import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml); //Para crear todos los elementos del HTML
    
console.log("todos", todoList.todos);


