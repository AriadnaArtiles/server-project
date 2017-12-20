'use strict ';
const Sequelize = require('sequelize');
const sequelize = require('../../db/connection');

const veterinario = require('./veterinario');
const cliente = require('./cliente');
const mascota = require('./mascota');
const recepcionista = require('./recepcionista');

const cita = sequelize.define('cita', {
    id: { type: Sequelize.UUID, allowNull: false, primaryKey: true, defaultValue: Sequelize.UUIDV1 },
    fecha: { type: Sequelize.DATE, allowNull: false },
    hora: { type: Sequelize.STRING(50), allowNull: false },
    precio: { type: Sequelize.FLOAT(2), allowNull: false }
});

//cita.hasOne(veterinario, { as: 'veterinario', foreignKey: 'veterinarioId' });
//cita.hasOne(cliente, { as: 'cliente', foreignKey: 'clienteId' });
//cita.hasOne(mascota, { as: 'mascota', foreignKey: 'mascotaId' });
//cita.hasOne(recepcionista, { as: 'recepcionista', foreignKey: 'recepcionistaId' });
module.exports = cita;
