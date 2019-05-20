const express = require('express');
const AdvertisementController = require('../controllers/advertisement.controller');
const api = express.Router();
const auth = require('../middlewares/authentication').tokenVerification;

api.post('/advertisements', [auth], AdvertisementController.Register);
api.get('/advertisements', [auth], AdvertisementController.ListAdvertisement);
api.put('/advertisements/:id', [auth], AdvertisementController.EditAdvertisement);
api.delete('/advertisements/:id', [auth], AdvertisementController.DeleteAdvertisement);
module.exports = api;