import { List } from "../classes/list";
import StorageHandler from "../classes/storageHandler";
import { router } from "../index.js";



function newTodoSubmit(){
    //GETS FORM
    const form = document.getElementById('todoForm');
    
    
    //INSTANTIATES FORM DATA
    const formData = new FormData(form);
    //GETS FORM VALUES
    const title = formData.get('title');
    const dueDate = formData.get('description');
    const priority = formData.get('priority);







}