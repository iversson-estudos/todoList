
import { List } from "../classes/list.js"

function mainView(){
//GETS MAIN CONTAINER AND ORGANIZES IT TO ACCOMODATE THE VIEW
const main = document.getElementById('main');
main.innerHTML=`
            <div id="left-container">
                <button id="newListBtn">NEW LIST</button>
                <div id="listContainer"></div>
            </div>
            <div id="main-container">
            </div>`;

//INSERT LISTS ONTO LIST CONTAINER
const listContainer = document.getElementById('listContainer');

const arrayOfLists = JSON.parse(localStorage.getItem('listsArray'));
console.log(arrayOfLists);

arrayOfLists.forEach(element => {
    const divList = document.createElement('div');
    const pName = document.createElement('p');
    const pDueDate = document.createElement('p');
    const pCreationDate = document.createElement('p');

    pName.textContent = 'Name: '+element.name;
    pDueDate.textContent= 'Due Date: '+element.dueDate;
    pCreationDate.textContent= 'Due Date: '+element.dateOfCreation;

    divList.appendChild(pName);
    divList.appendChild(pDueDate);
    divList.appendChild(pCreationDate);

    listContainer.appendChild(divList);
});

}

export { mainView };





