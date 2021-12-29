var express = require('express');
var router = express.Router();

const controllers = require('../controllers/landings')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/astronomy/landings/mass/:mass', controllers.mass)
router.get('/astronomy/landings?minimum_mass', controllers.mass)
router.get('/astronomy/landings/class/:class', controllers.landingClass)

module.exports = router;
