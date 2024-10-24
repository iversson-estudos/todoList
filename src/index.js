import "./css/styles.css";
import { List } from "./classes/list.js";
import { Todo } from "./classes/todo.js";
import { mainView } from "./views/mainView.js";
import StorageHandler from "./classes/storageHandler.js";   
import { addEventListenersToLists } from "./events/eventHandlers.js";
import { Router } from "./router/router.js";

//LISTS FOR TEST, NEED TO CREATE AN DEFAULT ONE WHEN FINISHED
const listsArray = [
    new List('Apple', '2024-11-01'),   // Format: yyyy-MM-dd
    new List('Microsoft', '2025-02-14'),
    new List('Amazon', '2024-09-23'),
    new List('Netflix', '2025-07-05'),
    new List('Tesla', '2024-12-12'),
    new List('Facebook', '2025-03-20'),
    new List('Samsung', '2024-06-11'),
    new List('Sony', '2025-08-30'),
    new List('Intel', '2024-10-25'),
    new List('IBM', '2025-01-17')
];

StorageHandler.saveLists(listsArray);


mainView();
const router = new Router();
addEventListenersToLists(router);













