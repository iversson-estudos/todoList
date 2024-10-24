import {router} from "../router/router.js";

function addEventListenersToLists(){
    const lists = document.getElementsByClassName('lists');

    lists.forEach(element => {
        
        element.addEventListener('click',(f)=>{
            
            const listId = f.target.dataset.id;
            router.loadList(listId);
        });
    });
}

export {addEventListenersToLists};