const Sequelize = require('sequelize');
const sequelize = new Sequelize('clinicaVeterinaria', 'root', 'ariadna', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }

});

sequelize.authenticate().then(() => {
    console.log("conecta")
}).catch(err => {
    console.error(err)
})

module.exports = sequelize;