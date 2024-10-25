import { List } from "../classes/list.js";
import { Todo } from "../classes/todo.js";
import StorageHandler from "../classes/storageHandler.js";

function todoView(list){
    //CONTAINER WHERE RENDERING TODOS
    const todoContainer = document.getElementById('todoContainer');
    todoContainer.innerHTML='';

   
    
    //RENDERS TODOS IF FOUND LIST
    if(list){
        //loads todos
        const todos = list.todos;
        todos.forEach(element => {
            
            const todoDiv = document.createElement('div');
            const pTitle = document.createElement('p');
            const pDescription= document.createElement('p');
            const pPriority = document.createElement('p');
            const pCompleted = document.createElement('p');

            pTitle.textContent = element.title;
            pDescription.textContent = element.description;
            pPriority.textContent = element.priority
            pCompleted.textContent = element.isCompleted;
            
            todoDiv.className='todo';
            todoDiv.appendChild(pTitle);
            todoDiv.appendChild(pDescription);
            todoDiv.appendChild(pPriority);
            todoDiv.appendChild(pCompleted);

            todoContainer.appendChild(todoDiv);
    
        });
    }


}


export { todoView };