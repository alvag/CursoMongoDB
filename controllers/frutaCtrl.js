'use strict';

const Fruta = require('../models/fruta');

function saveFruta(req, res) {
    let data = req.body;

    let fruta = new Fruta();
    fruta.nombre = data.nombre;
    fruta.color = data.color;
    fruta.temporada = data.temporada;

    fruta.save((err, frutaStored) => {
        if (err) {
            res.status(500).send({
                error: err,
                message: 'Error en el servidor'
            });
        } else if (frutaStored) {
            res.status(200).send({
                message: 'Datos guardados',
                fruta: frutaStored
            });
        } else {
            res.status(200).send({
                message: 'No se pudo guardar la fruta'
            });
        }
    });
}

function getFrutas(req, res) {
    Fruta.find({}).exec((err, frutas) => {
        if (err) {
            res.status(500).send({
                error: err,
                message: 'Error en el servidor'
            });
        } else if (frutas) {
            res.status(404).send({
                frutas
            });
        } else {
            res.status(404).send({
                message: 'No existen frutas registradas'
            });            
        }
    });
}

module.exports = {
    saveFruta,
    getFrutas
};