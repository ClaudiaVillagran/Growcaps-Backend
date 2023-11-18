const express = require('express');
const investment = require('../Controllers/Investment');
const api = express.Router();

api.post('/register', investment.createInvestment);
api.get('/getInvestments', investment.getAllInvestments);
api.get('/getInvestment/:id', investment.getInvestmentById);
api.put('/putInvestment/:id', investment.updateInvestment);
api.delete('/deleteInvestment/:id', investment.deleteInvestment);


module.exports = api;
