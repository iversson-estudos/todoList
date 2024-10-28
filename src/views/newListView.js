import StorageHandler from "../classes/storageHandler";
import { addEventListenerToNewListForm } from "../events/eventHandlers";
import { router } from "../index.js";

function newListView(){
    //GETS CONTAINER AND EMPTIES IT
    const todoContainer = document.getElementById('todoContainer');
    todoContainer.innerHTML='';

    
    //FORM BODY

    todoContainer.innerHTML= `
    <form id="listForm">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" maxlength="30" required>
    
        <label for="dueDate">Due Date:</label>
        <input type="date" id="dueDate" name="dueDate" required>
    
        <button type="submit" id="newListSubmit">Create Task</button>
    </form>`;

    //ADDS EVENT LISTENER TO FORM SUBMIT
    addEventListenerToNewListForm(router);
}


export { newListView }