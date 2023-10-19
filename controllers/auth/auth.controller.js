const express = require('express');
const router = express.Router();
const { verifyToken, tokenSign, compare, encrypt } = require("../../utils/handleToken");
const { validateLogin, validateRegister } = require("../../validators/auth.validator")
const { userModel } = require("../../models");

// REGISTER
router.post('/register', validateRegister, async (req, res) => {
    try {
        
        const checkIsExist = await userModel.findOne({ email: req.body.email });
        
        if (checkIsExist) 
            return res.status(401).json({ result: false, message: 'User exists', data: [] }); 
        
        const password = await encrypt(req.body.password);
        const bodyInsert = { ...req.body, password };
        
        const user = await userModel.create(bodyInsert);
        return res.status(200).json({ result: true, message: 'Successfully created user', data: user });
            
    } catch (error) {
        return res.status(500).json({ result: false, message: 'An error occurred on the server.' });
    }
});
// LOGIN
router.post('/login', validateLogin, async (req, res) => {
    try {
        
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email });
        if (!user) 
            return res.status(400).json({ result: false, message: 'User not found'}); 

        const checkPassword = await compare(password, user.password);
        if (!checkPassword)
            return res.status(400).json({ result: false, message: 'Password invalid' });
        
         // Generate a token for the user
        const token = await tokenSign({ email: req.body.email });
        const data = {
            data: user,
            token: token,
        };
        return res.status(200).json({ result: true, message: 'Successfully Created Player', data: data });    
    } catch (error) {
        return res.status(500).json({ result: false, message: 'An error occurred on the server.' });
    }
});

// Exporta los controladores
module.exports = router;