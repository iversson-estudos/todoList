import StorageHandler from "../classes/storageHandler";


function newListView(){
    //GETS CONTAINER AND EMPTIES IT
    const todoContainer = document.getElementById('todoContainer');
    todoContainer.innerHTML='';

    //FORM BODY

    todoContainer.innerHTML= `
    <form id="taskForm">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" maxlength="30" required>
    
        <label for="dueDate">Due Date:</label>
        <input type="date" id="dueDate" name="dueDate" required>
    
        <label for="description">Description:</label>
        <textarea id="description" name="description" maxlength="80" rows="3" required></textarea>
    
        <button type="submit">Create Task</button>
    </form>`;
}


export { newListView }