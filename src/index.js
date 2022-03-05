import'./styles.css';
import { Todo, TodoList} from './classes/index';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml(todo))
// linea de arriba y de abajo realizan lo mismo recrean el todo en el Html
// la forma corta utiliza el primer argumento entregado (el todo) al igual que la de arriba
todoList.todos.forEach(crearTodoHtml) 
