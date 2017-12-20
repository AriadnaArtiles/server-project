'use strict ';
const Sequelize = require('sequelize');
const cita = require('./cita');
const sequelize = require('../../db/connection');


const mascota = sequelize.define('mascota', {
    id: { type: Sequelize.UUID, allowNull: false, primaryKey: true, defaultValue: Sequelize.UUIDV1 },
    nombre: { type: Sequelize.STRING(50), allowNull: false },
    edad: { type: Sequelize.INTEGER, allowNull: false },
    vacunas: { type: Sequelize.STRING(50), allowNull: false },
    raza: { type: Sequelize.STRING(50), allowNull: false }
});
mascota.hasMany(cita, { foreignKey: 'mascotaId' });
//mascota.hasOne(cliente, { as: 'cliente', foreignKey: 'clienteId' });
module.exports = mascota;



