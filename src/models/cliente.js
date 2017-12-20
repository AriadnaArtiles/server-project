'use strict';
const mascota = require('./mascota');
const cita = require('./cita');
const Sequelize = require('sequelize');
const sequelize = require('../../db/connection');

const cliente = sequelize.define('cliente', {
    id: { type: Sequelize.UUID, allowNull: false, primaryKey: true, defaultValue: Sequelize.UUIDV1 },
    nombre: { type: Sequelize.STRING(50), allowNull: false },
    apellidos: { type: Sequelize.STRING(50), allowNull: false },
    dni: { type: Sequelize.STRING(50), allowNull: false },
    direccion: { type: Sequelize.STRING(50), allowNull: false },
    numTelefono: { type: Sequelize.INTEGER, allowNull: false },
    codigoPostal: { type: Sequelize.INTEGER, allowNull: false }

});
cliente.hasMany(mascota, { foreignKey: 'clienteId' });
cliente.hasMany(cita, { foreignKey: 'clienteId' });
module.exports = cliente;
