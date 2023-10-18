const express = require('express');
const router = express.Router();
const { routes } = require('./routes.constants')

router.use('/auth', routes.Auth);
router.use('/item', routes.Items);
router.use('/player', routes.Players);
router.use('/country', routes.Countries);

module.exports = router;