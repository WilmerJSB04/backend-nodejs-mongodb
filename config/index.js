const mongoose = require('mongoose')

const mongoDBConnect = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('** CONEXION CORRECTA **');
    })
    .catch((err) => {
        console.log('** ERROR DE CONEXION **', err);
    });
}

module.exports = mongoDBConnect