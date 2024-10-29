import { router } from "../index.js";

function addEventListenersToLists() {
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


function addEventToBtnNewList(){
    const button = document.getElementById('newListBtn');
    const newHandler = () => { 
        console.log('clicked on button NEW LIST');
        router.openNewListForm();
    }
    button.removeEventListener('click',newHandler);
    button.addEventListener('click',newHandler);
}

function addEventListenerToNewListForm(){
    //GETS BUTTON
    const button = document.getElementById('newListSubmit');
    
    //PREVENTS SUBMIT DEFAULT
    const form = document.getElementById('listForm').addEventListener('submit',function(event) {
        event.preventDefault();
    });
    
    //NEW HANDLER
    const newHandler = () => { 
        console.log('clicked on button to SUBMIT NEW LIST');
        router.newListSubmit();
    }
    //REMOVES AND ADDS HANDLER, SO THERES NO DUPLICATES
    button.removeEventListener('click',newHandler);
    button.addEventListener('click',newHandler);

    //GETS CLOSE BUTTON
    const closeButton = document.getElementById('closeForm');
    //ADDS EVENTLISTENER SO IT RELOADS MAIN VIEW
    closeButton.addEventListener('click',router.openMainView);
}

export { addEventListenersToLists, addEventToBtnNewList, addEventListenerToNewListForm };
