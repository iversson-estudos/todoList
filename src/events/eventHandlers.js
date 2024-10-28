import { Router } from "../router/router.js";

function addEventListenersToLists(router) {
    const lists = document.querySelectorAll('.list');
    lists.forEach(element => {
        const newHandler = (e) => {
            const listId = e.currentTarget.dataset.id;
            console.log('Clicked List ID:', listId);
            if (listId) {
                console.log('Navigating to list:', listId);
                router.navigateToList(listId);
            } else {
                console.error('List ID not found');
            }
        };
        
        // Remove any existing event listener to avoid duplicates
        element.removeEventListener('click', newHandler);
        // Add the new event listener
        element.addEventListener('click', newHandler);
    });
}


function addEventToBtnNewList(router){
    const button = document.getElementById('newListBtn');
    const newHandler = () => { 
        console.log('clicked on button NEW LIST');
        router.openNewListDialog();
    }
    button.removeEventListener('click',newHandler);
    button.addEventListener('click',newHandler);
}

export { addEventListenersToLists, addEventToBtnNewList };
