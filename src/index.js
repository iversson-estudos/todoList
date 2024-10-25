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

listsArray[0].addTodo('Design iPhone', 'Create concept sketches for iPhone', '8');
listsArray[0].addTodo('iOS Development', 'Develop iOS 18 features', '9');
listsArray[0].addTodo('Design iPhone', 'Create concept sketches for iPhone', '8');
listsArray[0].addTodo('iOS Development', 'Develop iOS 18 features', '9');
listsArray[0].addTodo('Design iPhone', 'Create concept sketches for iPhone', '8');
listsArray[0].addTodo('iOS Development', 'Develop iOS 18 features', '9');
listsArray[0].addTodo('Design iPhone', 'Create concept sketches for iPhone', '8');
listsArray[0].addTodo('iOS Development', 'Develop iOS 18 features', '9');
listsArray[1].addTodo('Windows 12 Update', 'Release beta version', '7');
listsArray[1].addTodo('Cloud Services', 'Expand Azure data centers', '8');
listsArray[1].addTodo('Windows 12 Update', 'Release beta version', '7');
listsArray[1].addTodo('Cloud Services', 'Expand Azure data centers', '8');
listsArray[1].addTodo('Windows 12 Update', 'Release beta version', '7');
listsArray[1].addTodo('Cloud Services', 'Expand Azure data centers', '8');
listsArray[1].addTodo('Windows 12 Update', 'Release beta version', '7');
listsArray[1].addTodo('Cloud Services', 'Expand Azure data centers', '8');
listsArray[1].addTodo('Windows 12 Update', 'Release beta version', '7');
listsArray[1].addTodo('Cloud Services', 'Expand Azure data centers', '8');
listsArray[1].addTodo('Windows 12 Update', 'Release beta version', '7');
listsArray[1].addTodo('Cloud Services', 'Expand Azure data centers', '8');
listsArray[2].addTodo('Supply Chain', 'Optimize Amazon Prime logistics', '7');
listsArray[2].addTodo('Website Redesign', 'Refresh homepage UI', '6');
listsArray[3].addTodo('Programming', 'Overloading my apps', '10');
listsArray[3].addTodo('Content Acquisition', 'Negotiate new film licenses', '9');
listsArray[4].addTodo('Battery Technology', 'Research new battery tech', '8');
listsArray[4].addTodo('Autopilot Development', 'Enhance self-driving AI', '9');
listsArray[5].addTodo('Social Media Update', 'Add privacy features', '7');
listsArray[5].addTodo('Ad Campaign', 'Launch new targeted ads', '5');
listsArray[6].addTodo('Smartphone Release', 'Prepare Galaxy launch', '8');
listsArray[6].addTodo('UI/UX Design', 'Enhance user experience', '6');
listsArray[7].addTodo('Gaming Console', 'Develop PlayStation 6 specs', '9');
listsArray[7].addTodo('Sensor Technology', 'Enhance camera sensors', '8');
listsArray[8].addTodo('Processor Development', 'Launch new i9 processor', '9');
listsArray[8].addTodo('AI Research', 'Expand AI initiatives', '10');
listsArray[9].addTodo('Quantum Computing', 'Research quantum circuits', '10');
listsArray[9].addTodo('Cloud Solutions', 'Develop next-gen cloud servers', '9');






StorageHandler.saveLists(listsArray);


mainView();
const router = new Router();
addEventListenersToLists(router);













