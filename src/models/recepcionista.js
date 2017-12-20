const Sequelize = require('sequelize');
const cita = require('./cita');
const sequelize = require('../../db/connection');


'use strict';

const recepcionista = sequelize.define('recepcionista', {
    id: { type: Sequelize.UUID, allowNull: false, primaryKey: true, defaultValue: Sequelize.UUIDV1 },
    nombre: { type: Sequelize.STRING(50), allowNull: false },
    apellidos: { type: Sequelize.STRING(50), allowNull: false },
    dni: { type: Sequelize.STRING(50), allowNull: false },
    direccion: { type: Sequelize.STRING(50), allowNull: false }
});
//recepcionista.hasMany(cita, { foreignKey: 'recepcionistaId' });
module.exports = recepcionista;