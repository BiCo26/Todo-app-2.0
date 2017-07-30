const express = require('express');
const todoRouter = express.Router();

const todoController = require('../controllers/todos-Controller');
todoRouter.get('/', todoController.index);

todoRouter.get('/:id',todoController.show);

module.exports = todoRouter;