// Importa los servicios
const express = require('express');
const router = express.Router();
const { authService } = require('./auth.service');
const { verifyToken } = require("../../utils/handleToken");
const { validateLogin } =require("../../validators/auth")

// REGISTER
router.post('/register', (req, res) => {
    try {
        return res.status(200).json({ success: true, message: 'Successfully Created Player', data: [] });    
    } catch (error) {
        return res.status(500).json({ success: false, message: 'An error occurred on the server.' });
    }
});
// LOGIN
router.post('/login', validateLogin, (req, res) => {
    try {
        return res.status(200).json({ success: true, message: 'Successfully Created Player', data: [] });    
    } catch (error) {
        return res.status(500).json({ success: false, message: 'An error occurred on the server.' });
    }
});

// Exporta los controladores
module.exports = router;