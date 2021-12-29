var express = require('express');
var router = express.Router();

const controllers = require('../controllers/landings')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/astronomy/landings', controllers.getLandings)
router.get('/astronomy/landings/mass/:mass', controllers.mass)

module.exports = router;
