// Ejemplo de un controlador (countries.controller.js)
const express = require('express');
const router = express.Router();

// GET
router.get('', (req, res) => {
    try {
        return res.status(200).json({ success: true, message: 'Successfully get players', data: [] });    
    } catch (error) {
        return res.status(500).json({ success: false, message: 'An error occurred on the server.' });
    }
});

// CREATE
router.post('', (req, res) => {
    try {
        return res.status(200).json({ success: true, message: 'Successfully Created Player', data: [] });    
    } catch (error) {
        return res.status(500).json({ success: false, message: 'An error occurred on the server.' });
    }
});

// UPDATE
router.put('/:_id', (req, res) => {
    try {
        return res.status(200).json({ success: true, message: 'Successfully Updated Player', data: [] });    
    } catch (error) {
        return res.status(500).json({ success: false, message: 'An error occurred on the server.' });
    }
});

// Define rutas y maneja las solicitudes
router.delete('/:_id', (req, res) => {
    try {
        return res.status(200).json({ success: true, message: 'Successfully Deleted Player', data: [] });    
    } catch (error) {
        return res.status(500).json({ success: false, message: 'An error occurred on the server.' });
    }
});

module.exports = router;
