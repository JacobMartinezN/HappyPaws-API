const express = require('express');
const PetShopController = require('../controllers/petShop.controller');
const api = express.Router();
const auth = require('../middlewares/authentication').tokenVerification;

api.post('/petshop', [auth], PetShopController.Register);

module.exports = api;