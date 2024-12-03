import { List } from "../classes/list";
import StorageHandler from "../classes/storageHandler";
import { router } from "../index.js";
import { mainView } from "../views/mainView";



function newListSubmit(){
    //GETS FORM
    const form = document.getElementById('listForm');
    
    
    //INSTANTIATES FORM DATA
    const formData = new FormData(form);
    //GETS FORM VALUES
    const title = formData.get('title');
    const dueDate = formData.get('dueDate');

    if(!form.reportValidity()){
        return 0;
    }

    //CREATES NEW LIST
    const newList = new List(title,dueDate);
    
    //GETS ID FROM NEW LIST
    const idList = newList.id;

    
    //GETS CURRENT LISTS 
    const arrayOfLists = StorageHandler.loadLists();
    //PUSHES NEW LIST TO ARRAY
    arrayOfLists.push(newList);
    //CLEARS LOCALSTORAGE
    StorageHandler.clearLists();
    //SAVES NEW LISTS
    StorageHandler.saveLists(arrayOfLists);
    //REDIRECTS APP TO SHOW NEW LIST
    router.navigateToList(idList);
}



export {newListSubmit}