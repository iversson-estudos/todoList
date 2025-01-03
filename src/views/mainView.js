
import { List } from "../classes/list.js"
import  StorageHandler  from "../classes/storageHandler.js"
import { addEventListenersToLists, addEventToBtnNewList } from "../events/eventHandlers.js";


function mainView(){
//GETS MAIN CONTAINER AND ORGANIZES IT TO ACCOMODATE THE VIEW
const main = document.getElementById('main');
main.innerHTML=`
            <div id="leftContainer">
                <button id="newListBtn">NEW LIST</button>
                <div id="listContainer"></div>
            </div>
            <div id="todoContainer">
            </div>`;

//GETS CONTAINER FOR THE LISTS
const listContainer = document.getElementById('listContainer');


//GETS LISTS FROM LOCALSTORAGE
const arrayOfLists = StorageHandler.loadLists();
console.log(arrayOfLists);

//ORDERS LISTS BY NAME
arrayOfLists.sort((a, b) => {
    if (a._name < b._name) return -1;
    if (a._name > b._name) return 1;
    return 0;
});

    //INSERT LISTS ONTO LIST CONTAINER
    arrayOfLists.forEach(element => {
    const divList = document.createElement('div');
    
    divList.className='list';
    divList.textContent=element.name;
    divList.dataset.id = element.id;

    const pDueDate = document.createElement('p');

    pDueDate.textContent= 'Due Date: '+element.dueDate;
   
    divList.appendChild(pDueDate);

    listContainer.appendChild(divList);
    });

    //ADDS EVENTLISTENERS TO THE LISTS AND BUTTON
    addEventListenersToLists();
    addEventToBtnNewList();

}

export { mainView };





