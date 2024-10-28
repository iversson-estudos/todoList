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

    //CREATES NEW LIST
    const newList = new List(title,dueDate);
    
    //GETS ID FROM NEW LIST
    const idList = newList.id;

    newList.addTodo('Design iPhone', 'Create concept sketches for iPhone', '8');
    newList.addTodo('iOS Development', 'Develop iOS 18 features', '9');
    newList.addTodo('Windows 12 Update', 'Release beta version', '7');
    newList.addTodo('Cloud Services', 'Expand Azure data centers', '8');
    newList.addTodo('Windows 12 Update', 'Release beta version', '7');
    newList.addTodo('Cloud Services', 'Expand Azure data centers', '8');
    newList.addTodo('Windows 12 Update', 'Release beta version', '7');
    newList.addTodo('Cloud Services', 'Expand Azure data centers', '8');
    newList.addTodo('Windows 12 Update', 'Release beta version', '7');
    newList.addTodo('Cloud Services', 'Expand Azure data centers', '8');
    newList.addTodo('Windows 12 Update', 'Release beta version', '7');
    newList.addTodo('Cloud Services', 'Expand Azure data centers', '8');
    newList.addTodo('Windows 12 Update', 'Release beta version', '7');
    newList.addTodo('Cloud Services', 'Expand Azure data centers', '8');
    newList.addTodo('Supply Chain', 'Optimize Amazon Prime logistics', '7');


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