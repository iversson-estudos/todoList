import { format, parseISO} from "date-fns";
import { Todo } from "./todo.js";

class List {
    constructor(name, dueDate) {
        this._id = Date.now();
        this._name = name;
        this._dueDate = dueDate; 
        this._dateOfCreation = format(new Date(), 'dd-MM-yyyy');
        this._status = 'created';
        
        //TO DO'S
        this._todos = [];
    }

    //Returns the whole list
    get Lista(){
        return this;
    }

    //Getter for ID
    get id(){
        return this._id;
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
        this._dueDate = newDate;
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
    set status(newStatus){
        this._status = newStatus;
    }
     
    // Convert List instance to a plain object for JSON serialization
    toJSON() {
        return {
            _id: this._id,
            _name: this._name,
            _dueDate: this._dueDate,
            _dateOfCreation: this._dateOfCreation,
            _status: this._status,
            _todos: this._todos
        };
    }

    // Static method to re-instantiate a List from a plain object
    static fromJSON(data) {
        const list = new List(data._name, data._dueDate); 
        list._id = data._id;
        list._dateOfCreation = data._dateOfCreation;
        list._status = data._status;
        list._todos = data._todos;
        return list;
    }
}

export { List };
