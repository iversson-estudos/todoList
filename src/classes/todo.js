class Todo {
    constructor(title, description, priority) {
        this._title = title;
        this._description = description;
        this._priority = priority;
        this._isCompleted = false;
    }

    // Getter for title
    get title() {
        return this._title;
    }

    // Setter for title
    set title(newTitle) {
        this._title = newTitle;
    }

    // Getter for description
    get description() {
        return this._description;
    }

    // Setter for description
    set description(newDescription) {
        this._description = newDescription;
    }

    // Getter for priority
    get priority() {
        return this._priority;
    }

    // Setter for priority
    set priority(newPriority) {
        this._priority = newPriority;
    }

    // Getter for isCompleted
    get isCompleted() {
        return this._isCompleted;
    }

    // Setter for isCompleted
    set isCompleted(status) {
        this._isCompleted = status;
    }
}

export { Todo };
