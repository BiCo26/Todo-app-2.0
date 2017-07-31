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
    },
    create: (req,res)=>{
        Todo.create({
            title: req.body.title,
            currentdate: req.body.currentdate,
            content :req.body.content    
        }).then(()=>{
            res.redirect('/todos');
        }).catch(err=>{
            console.log(err);
            res.status(500).json(err);
        });
    },
    update :(req,res)=>{
        console.log(req.params.id);
        Todo.update({
         title: req.body.title,
         currentdate: req.body.currentdate,
         content :req.body.content      
        }, req.params.id).then((id)=>{
            res.redirect(`/todos/${req.params.id}`)
        }).catch(err=>{
            console.log(err);
            res.status(500).json(err);
        })
    }
}

module.exports = todoController;