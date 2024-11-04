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
    const description = formData.get('description');
    const priority = formData.get('priority');
    //GETS SELECTED LIST
    const hash = window.location.hash;
    const listId = hash.split('/')[1]; // Extract the listId from the URL (after #list/)
    //GETS LISTS
    const arrayOfLists = StorageHandler.loadLists();
    //FINDS SELECTED LIST
    const list = arrayOfLists.find(list => list.id == listId);
    //ADDS NEW TODO IF LIST FOUND
    if(list){
        list.addTodo(title,description,priority);
    }
    //CLEARS STORAGE FROM LISTS
    StorageHandler.clearLists();
    //SAVES LISTS WITH CHANGES
    StorageHandler.saveLists(arrayOfLists);
    //ROUTES TO LIST
    router.routeChanged();
}

export {newTodoSubmit}