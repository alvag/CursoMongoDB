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

function getFruta(req, res) {
    let frutaId = req.params.frutaId;
    Fruta.findById(frutaId, (err, fruta) => {
        if (err) {
            res.status(500).send({
                error: err,
                message: 'Error en el servidor'
            });
        } else if (fruta) {
            res.status(200).send({
                fruta
            });
        } else {
            res.status(404).send({
                message: 'No se puede obtener la fruta solicitada'
            });
        }
    });
}

function updateFruta(req, res) {
    let frutaId = req.params.frutaId;
    let data = req.body;
    Fruta.findByIdAndUpdate(frutaId, data, { new: true }, (err, frutaUpdated) => {
        if (err) {
            res.status(500).send({
                error: err,
                message: 'Error en el servidor'
            });
        } else if (frutaUpdated) {
            res.status(200).send({
                fruta: frutaUpdated
            });
        } else {
            res.status(404).send({
                message: 'No existe la fruta',
            });
        }
    });
}

function deleteFruta(req, res) {
    let frutaId = req.params.frutaId;
    Fruta.findByIdAndRemove(frutaId, (err, frutaRemoved) => {
        if (err) {
            res.status(500).send({
                error: err,
                message: 'Error en el servidor'
            });
        } else if (frutaRemoved) {
            res.status(200).send({
                fruta: frutaRemoved,
                message: 'Producto eliminado'
            });
        } else {
            res.status(404).send({
                message: 'No existe la fruta'
            });
        }
    });
}

module.exports = {
    saveFruta,
    getFrutas,
    getFruta,
    updateFruta,
    deleteFruta
};