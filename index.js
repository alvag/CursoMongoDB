'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connection.openUri(config.db, (err, res) => {
    if (err) {
        console.log('Error al conectar con la base de datos', err);
    } else {
        console.log('Conexión establecida.');

        app.listen(config.port, () => {
            console.log(`API Rest corriendo en http://localhost:${config.port}`);
        });
    }
});