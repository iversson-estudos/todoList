
import { List } from "../classes/list.js"
import  StorageHandler  from "../classes/storageHandler.js"

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

//INSERT LISTS ONTO LIST CONTAINER
const listContainer = document.getElementById('listContainer');

const arrayOfLists = StorageHandler.loadLists();
console.log(arrayOfLists);

arrayOfLists.forEach(element => {
    const divList = document.createElement('div');
    
    divList.className='list';
    divList.textContent=element.name;
    divList.dataset.id = element.id;

    const pName = document.createElement('p');
    const pDueDate = document.createElement('p');
    const pCreationDate = document.createElement('p');

    pName.textContent = 'Name: '+element.name;
    pDueDate.textContent= 'Due Date: '+element.dueDate;
    pCreationDate.textContent= 'Date of Creation: '+element.dateOfCreation;

    divList.appendChild(pName);
    divList.appendChild(pDueDate);
    divList.appendChild(pCreationDate);

    listContainer.appendChild(divList);
});

}

export { mainView };





