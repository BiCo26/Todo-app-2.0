const express = require('express');
const todoRouter = express.Router();

const todoController = require('../controllers/todos-Controller');
todoRouter.get('/', todoController.index);
todoRouter.post('/', todoController.create);

todoRouter.get('/:id',todoController.show);
todoRouter.put('/:id',todoController.update);

module.exports = todoRouter;