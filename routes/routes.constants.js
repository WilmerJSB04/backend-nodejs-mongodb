const routes = {
    Auth:  require('../controllers/auth/auth.controller'),
    Countries: require('../controllers/countries/countries.controller'),
    Items: require('../controllers/items/items.controller'),
    Players: require('../controllers/players/players.controller'),
}
module.exports = { routes }