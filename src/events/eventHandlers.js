import { Router } from "../router/router.js";

function addEventListenersToLists() {
    const lists = document.querySelectorAll('.list'); // Select all lists (not 'lists', but 'list')

    const router = new Router(); // Instantiate the router here if not already done

    lists.forEach(element => {
        element.addEventListener('click', (e) => {
            const listId = e.currentTarget.dataset.id; // Get the data-id attribute of the clicked list
            console.log('Clicked List ID:', listId);
            if (listId) {
                console.log('Navigating to list:', listId);
                router.navigateToList(listId); // Call router to change the URL
            } else {
                console.error('List ID not found');
            }
        });
    });
}

export { addEventListenersToLists };
