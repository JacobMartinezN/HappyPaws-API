const express = require('express');
const TaskController = require('../controllers/task.controller');
const api = express.Router();
const auth = require('../middlewares/authentication').tokenVerification;

api.post('/tasks', [auth], TaskController.Register);
api.get('/pets/:id/tasks', [auth], TaskController.FindTasksByPet);
api.put('/tasks/:id', [auth], TaskController.EditTask);
api.delete('/tasks/:id', [auth], TaskController.DeleteTask);

module.exports = api;   