import "./css/styles.css";
import { mainView } from "./views/mainView.js";
import { newListView } from "./views/newListView.js";
import { Router } from "./router/router.js";
import StorageHandler from "./classes/storageHandler.js";

//LISTS FOR TEST, NEED TO CREATE AN DEFAULT ONE WHEN FINISHED

mainView();
const router = new Router();
newListView();


export {router};












