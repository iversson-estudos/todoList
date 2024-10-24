import { List } from "../classes/list.js";
import { Todo } from "../classes/todo.js";
import StorageHandler from "../classes/storageHandler.js";

function todoView(listId){
    //CONTAINER WHERE RENDERING TODOS
    const todoContainer = document.getElementById('todoContainer');
    todoContainer.innerHTML='';

    //LOADS LISTS FROM LOCALSTORAGE
    const arrayOfLists = StorageHandler.loadLists();
    //SELECT CORRECT LIST
    const selectedList = arrayOfLists.find(list => list._id == listId);
    console.log('Loaded lists:', arrayOfLists);
    //RENDERS TODOS IF FOUND LIST
    if(selectedList){
        //loads todos
        console.log('should be lading tods');
        const todos = selectedList.todos;
        
        todos.forEach(Todo => {
            const todoDiv = document.createElement('div');
            const pTitle = document.createElement('p');
            const pDescription= document.createElement('p');
            const pPriority = document.createElement('p');
            const pCompleted = document.createElement('p');

            pTitle.textContent = Todo.title;
            pDescription.textContent = Todo.description;
            pPriority.textContent = Todo.priority
            pCompleted.textContent = Todo.isCompleted;
            
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