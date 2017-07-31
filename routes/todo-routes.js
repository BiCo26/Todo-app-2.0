const express = require('express');
const todoRouter = express.Router();

const todoController = require('../controllers/todos-Controller');
todoRouter.get('/', todoController.index);
todoRouter.post('/', todoController.create);
todoRouter.get('/add',(req,res)=>{
    res.render('todo/add-todo');
});
todoRouter.get('/edit/:id',todoController.edit);

todoRouter.get('/:id',todoController.show);
todoRouter.put('/:id',todoController.update);
todoRouter.delete('/:id',todoController.delete);

module.exports = todoRouter;