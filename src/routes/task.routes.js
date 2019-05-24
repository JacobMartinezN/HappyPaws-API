const express = require('express');
const TaskController = require('../controllers/task.controller');
const api = express.Router();
const auth = require('../middlewares/authentication').tokenVerification;

api.post('/tasks', [auth], TaskController.Register);

module.exports = api;   