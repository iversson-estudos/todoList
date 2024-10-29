import "./css/styles.css";
import { List } from "./classes/list.js";
import { Todo } from "./classes/todo.js";
import { mainView } from "./views/mainView.js";
import StorageHandler from "./classes/storageHandler.js";   
import { addEventListenersToLists, addEventToBtnNewList } from "./events/eventHandlers.js";
import { Router } from "./router/router.js";

//LISTS FOR TEST, NEED TO CREATE AN DEFAULT ONE WHEN FINISHED

mainView();

const router = new Router();
addEventListenersToLists();
addEventToBtnNewList();


export {router};












