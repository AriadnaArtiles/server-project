const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');
const Mascota = require('../models/mascota');
const Cita = require('../models/Cita');
const Veterinario = require('../models/Veterinario');
const Recepcionista = require('../models/Recepcionista');
const Sequelize = require('sequelize');

const sequelize = require('../../db/connection');
/*
Cliente.sync();
Mascota.sync();
Cita.sync();
Veterinario.sync();
Recepcionista.sync();
*/

/*-------------------------------GET----------------------*/

router.get('/mascota/:id', (req, res) => {
    console.log('fgbjkfbkgfjbngfkj');
    Mascota.findOne({
        where: {
            id: req.params.id
        }
    }).then(mascota => {
        res.status(200).json(mascota);
    });
});

router.get('/cita/:id', (req, res) => {
    console.log('fgbjkfbkgfjbngfkj');
    Cita.findOne({
        where: {
            id: req.params.id
        }
    }).then(cita => {
        res.status(200).json(cita);
    });
});

router.get('/cliente/:id', (req, res) => {
    console.log('fgbjkfbkgfjbngfkj');
    Cliente.findOne({
        where: {
            id: req.params.id
        }
    }).then(cliente => {
        res.status(200).json(cliente);
    });
});

/*-------------------------------POST------------------------*/

router.post('/mascotaInsertar', (req, res) => {
    Mascota.create({
        nombre: req.body.nombre,
        edad: req.body.edad,
        vacunas: req.body.vacunas,
        raza: req.body.raza
    });
});

router.post('/citaInsertar', (req, res) => {
    Cita.create({
        fecha: req.body.fecha,
        hora: req.body.hora,
        precio: req.body.precio
    });
});

router.post('/clienteInsertar', (req, res) => {
    Cliente.create({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        dni: req.body.dni,
        direccion: req.body.direccion,
        numTelefono: req.body.numTelefono,
        codigoPostal: req.body.codigoPostal
    });
});








/*-------------------------DELETE-----------------*/

router.delete('/mascotaBorrar/:id', (req, res) => {
    const id = req.params.id;
    Mascota.findById(id).then(mascota => {
        mascota.destroy().then(() => res.status(200).json({
            msg: 'se ha borrado con exito'
        }));
    })
})

router.delete('/citaBorrar/:id', (req, res) => {
    const id = req.params.id;
    Cita.findById(id).then(cita => {
        cita.destroy().then(() => res.status(200).json({
            msg: 'se ha borrado con exito'
        }));
    })
})

router.delete('/clienteBorrar/:id', (req, res) => {
    const id = req.params.id;
    Cliente.findById(id).then(cliente => {
        cliente.destroy().then(() => res.status(200).json({
            msg: 'se ha borrado con exito'
        }));
    })
})


/*--------------------------------------PUT------------------------------*/

router.put('/mascotaActualizar/:id', (req, res) => {
    const id = req.params.id;
    const nuevo = {};
    if (req.body.nombre) {
        nuevo.nombre = req.body.nombre;
    }
    if (req.body.edad) {
        nuevo.edad = req.body.edad;
    }
    if (req.body.vacunas) {
        nuevo.vacunas = req.body.vacunas;
    }
    if (req.body.raza) {
        nuevo.raza = req.body.raza;
    }
    Mascota.findById(id).then(mascota => {
        mascota.update(nuevo).then(() => res.status(200).json({
            msg: 'se ha modificado con exito'
        }));
    })
})

router.put('/citaActualizar/:id', (req, res) => {
    const id = req.params.id;
    const nuevo = {};
    if (req.body.fecha) {
        nuevo.fecha = req.body.fecha;
    }
    if (req.body.hora) {
        nuevo.hora = req.body.hora;
    }
    if (req.body.precio) {
        nuevo.precio = req.body.precio;
    }
    Cita.findById(id).then(cita => {
        cita.update(nuevo).then(() => res.status(200).json({
            msg: 'se ha modificado con exito'
        }));
    })
})

router.put('/clienteActualizar/:id', (req, res) => {
    const id = req.params.id;
    const nuevo = {};
    if (req.body.nombre) {
        nuevo.nombre = req.body.nombre;
    }
    if (req.body.apellidos) {
        nuevo.apellidos = req.body.apellidos;
    }
    if (req.body.dni) {
        nuevo.dni = req.body.dni;
    }
    if (req.body.direccion) {
        nuevo.direccion = req.body.direccion;
    }
    if (req.body.numTelefono) {
        nuevo.numTelefono = req.body.numTelefono;
    }
    if (req.body.codigoPostal) {
        nuevo.codigoPostal = req.body.codigoPostal;
    }
    Cliente.findById(id).then(cliente => {
        cliente.update(nuevo).then(() => res.status(200).json({
            msg: 'se ha modificado con exito'
        }));
    })
})

module.exports = router;
