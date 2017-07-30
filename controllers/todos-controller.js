const Todo = require('../models/todos.js');

const todoController = {
    index: (req,res)=>{
        Todo.findAll().then((todos)=>{
            res.json(todos);
        }).catch(e=>{
            console.log(err);
            res.status(500).json(err);
        });
    },
    show: (req,res)=>{
        Todo.findById(req.params.id).then((todo)=>{
            res.json(todo);
        }).catch(err=>{
            console.log(err);
            res.status(500).json(err);
        });
    }
}

module.exports = todoController;