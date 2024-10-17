import { format } from "date-fns";
import {Todo} from "./todo.js";

class List {
    constructor(name, dueDate) {
        this._name = name;
        this._dueDate = format(new Date(dueDate), 'dd/MM/yyyy');
        this._dateOfCreation = format(new Date(), 'dd/MM/yyyy');
        this._status = 'created';
        
        //TO DO'S
        this._todos = [];
    }

    //Add new todo
    addTodo(title,description,priority){
        const newTodo = new Todo(title,description,priority);
        this._todos.push(newTodo);
    }
    //Getter for todos
    get todos(){
        return this._todos;
    }


    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(newName) {
        this._name = newName;
    }

    // Getter for dueDate
    get dueDate() {
        return this._dueDate;
    }

    // Setter for dueDate
    set dueDate(newDate) {
        this._dueDate = format(new Date(newDate), 'dd/MM/yyyy');
    }

    // Getter for dateOfCreation
    get dateOfCreation() {
        return this._dateOfCreation;
    }

    // No setter for dateOfCreation because it's fixed on creation

    // Getter for status
    get status() {
        return this._status;
    }

    // Setter for status
    set status(newStatus) {
        this._status = newStatus;
    }
}

export { List };
