const todo = require("./todoLib");
// The data model for a to-do item is as follows
/*
{
    "task": "Buy groceries",
    "completed": false,
    "dueDate": "2025-08-30"
}
*/
const getAllTodos = (req, res) => {
    const todos = todo.getAll();
    res.json(todos);
};

const createTodo = (req, res) => {
    const { task, completed, dueDate } = req.body;

    const newTodo = todo.addOne(task, completed, dueDate);

    if (newTodo) {
        res.json(newTodo);
    } else {
        res.status(500).json({ message: "Failed to create todo" });
    }
};

const getTodoById = (req, res) => {
    const todoId = req.params.todoId;
    const ToDo = todo.findById(todoId);
    if (ToDo) {
        res.json(ToDo);
    } else {
        res.status(404).json({ message: 'todo not found' });
    }
};

const updateTodo = (req, res) => {
    const todoId = req.params.todoId;

    const { task, completed, dueDate } = req.body;

    const updatedTodo = todo.updateOneById(todoId, { task, completed, dueDate });

    if (updatedTodo) {
        res.json(updatedTodo);
    } else {
        res.status(404).json({ message: "todo not found" });
    }
};

const deleteTodo = (req, res) => {
    const todoId = req.params.todoId;

    const isDeleted = todo.deleteOneById(todoId);

    if (isDeleted) {
        res.json({ message: "todo deleted successfully" });
    } else {
        res.status(404).json({ message: "todo not found" });
    }
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
}