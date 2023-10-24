const express = require('express');
const cap = require('../Controllers/Cap');
const api = express.Router();

api.post('/register', cap.createCap);
api.get('/getCaps', cap.getAllCaps);
api.get('/getCap/:id', cap.getCapById);
api.put('/putCap/:id', cap.updateCapById);
api.delete('/deleteCap/:id', cap.deleteCapById);

module.exports = api;
