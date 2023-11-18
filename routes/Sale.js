const express = require('express');
const sale = require('../Controllers/Sale');
const api = express.Router();

api.post('/register', sale.createSale);
api.get('/getSales', sale.getAllSales);
api.get('/getSale/:id', sale.getSaleById);
api.put('/putSale/:id', sale.updateSale);
api.delete('/deleteSale/:id', sale.deleteSale);

module.exports = api;
