const express = require('express');
const router = express.Router();
const authGuard = require('../../middleware/auth')

router.get('', authGuard, (req, res) => {
    try {
        return res.status(200).json({ success: true, message: 'Items Obtenidos', data: [] });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Ocurrió un error en el servidor' });
    }
});

module.exports = router;
