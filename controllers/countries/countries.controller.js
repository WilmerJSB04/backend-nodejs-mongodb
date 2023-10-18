// Ejemplo de un controlador (countries.controller.js)
const express = require('express');
const router = express.Router();

// Define rutas y maneja las solicitudes
router.get('', (req, res) => {
    try {
        return res.status(200).json({ success: true, message: 'Países Obtenidos', data: ['Venezuela', 'Brasil'] });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Ocurrió un error en el servidor' });
    }
});

module.exports = router;
