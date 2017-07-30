const express = require('express');
const todoRouter = express.Router();

const todoController = require('../controllers/todos-Controller');
todoRouter.get('/', todoController.index);

module.exports = todoRouter;