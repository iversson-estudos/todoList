import { List } from "../classes/list.js"

function newTodoView(){

    //GET CONTAINER
    const todoContainer = document.getElementById('todoContainer');
    //HTML FOR NEW TODOFORM
    todoContainer.innerHTML= `
    <form id="listForm">
        <button id="closeForm">X</button>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" maxlength="30" required>
        <label for="description">Description:</label>
        <input type="text" id="description" name="description" maxlength="80">
        <label for="title">Priority:</label>
        <div id="priority">
            <label>
              <input type="radio" name="priority" value="high" /> High
            </label>
            <label>
              <input type="radio" name="priority" value="medium" /> Medium
            </label>
            <label>
              <input type="radio" name="priority" value="low" /> Low
            </label>
        </div>
        <button type="submit" id="newTodoSubmit">Create List</button>
    </form>`
    `;

}


export { newTodoView }