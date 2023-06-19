class Todo {
    _id: string;
    name: string;
    completed: boolean;

    constructor(_id: string, name: string, completed: boolean) {
        this._id = _id;
        this.name = name;
        this.completed = completed;
    }
}

export default Todo;
