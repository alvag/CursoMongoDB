'use strict';

const express = require('express');
const api = express.Router();

const frutaCtrl = require('../controllers/frutaCtrl');

api.post('/fruta', frutaCtrl.saveFruta);
api.get('/frutas', frutaCtrl.getFrutas);

module.exports = api;