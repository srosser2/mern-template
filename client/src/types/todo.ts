class Todo {
    _id: string;
    name: string;
    completed: boolean;
    description: string;

    constructor(_id: string, name: string, completed: boolean, description: string) {
        this._id = _id;
        this.name = name;
        this.completed = completed;
        this.description = description;
    }
}

export default Todo;
