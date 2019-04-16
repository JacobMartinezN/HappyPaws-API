const express = require('express');
const Petcontroller = require('../controllers/pet.controller');
const api = express.Router();
const auth = require('../middlewares/authentication').tokenVerification;

api.post('/pets', [auth], Petcontroller.Register);
//api.get('/pets', [auth], Petcontroller.FindPets);
//test
api.get('/pets', [auth], Petcontroller.FindPetsByUser);
api.put('/pets/:id', [auth], Petcontroller.EditPet);
api.delete('/pets/:id', [auth], Petcontroller.DeletePet);

module.exports = api;