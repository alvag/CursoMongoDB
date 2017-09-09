'use strict';

const express = require('express');
const api = express.Router();

const frutaCtrl = require('../controllers/frutaCtrl');

api.post('/fruta', frutaCtrl.saveFruta);
api.get('/frutas', frutaCtrl.getFrutas);
api.get('/fruta/:frutaId', frutaCtrl.getFruta);
api.put('/fruta/:frutaId', frutaCtrl.updateFruta);
api.delete('/fruta/:frutaId', frutaCtrl.deleteFruta);

module.exports = api;