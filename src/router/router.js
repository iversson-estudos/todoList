import StorageHandler from "../classes/storageHandler";
import { todoView } from "../views/todoView"; // Assuming todoView is a function to render todos
import { newListView } from "../views/newListView";
import { addEventListenerToNewListForm } from "../events/eventHandlers";
import { newListSubmit } from "../controllers/newListSubmit";
import { mainView } from "../views/mainView";
import { newTodoView } from "../views/newTodoView";
import { newTodoSubmit } from "../controllers/newTodoSubmit";

class Router {
    constructor() {
        // Listen for hash changes (when the URL changes)
        window.addEventListener('hashchange', () => this.routeChanged());
    }

    // Change the URL when navigating to a specific list
    navigateToList(listId) {
        window.location.hash = `#list/${listId}`;// Updates the URL hash with the list's ID
        
    }

    // Handle changes in the URL hash
    routeChanged() {
        const hash = window.location.hash;
        const listId = hash.split('/')[1]; // Extract the listId from the URL (after #list/)
        if (listId) {
            this.loadList(listId); // Load the list corresponding to the listId
        }
    }

    // Load the list based on its ID
    loadList(listId) {
        const arrayOfLists = StorageHandler.loadLists(); // Load lists from storage
        const list = arrayOfLists.find(list => list.id == listId); // Find list by id
        if (list) {
            mainView(); //re-renders mainView so it shows new list when created
            todoView(list); // Call todoView to render the todos for the selected list
        } else {
            console.error('List not found');
        }
    }
    openMainView(){
        mainView();
    }

    openNewListForm(){
        window.location.hash = `#newlist/`;
        newListView();
    }

    newListSubmit(){
        newListSubmit();
    }
    
    openNewTodoForm(){
       newTodoView();
    }
    
    newTodoSubmit(){
        newTodoSubmit();
    }
}

export { Router };
