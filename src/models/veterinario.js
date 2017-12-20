
'use strict';
const Sequelize = require('sequelize');
const cita = require('./cita');
const sequelize = require('../../db/connection');

const veterinario = sequelize.define('veterinario', {
    id: { type: Sequelize.UUID, allowNull: false, primaryKey: true, defaultValue: Sequelize.UUIDV1 },
    nombre: { type: Sequelize.STRING(50), allowNull: false },
    apellidos: { type: Sequelize.STRING(50), allowNull: false },
    dni: { type: Sequelize.STRING(50), allowNull: false },
    direccion: { type: Sequelize.STRING(50), allowNull: false }

});
//veterinario.hasMany(cita, { foreignKey: 'veterinarioId' });

module.exports = veterinario;


