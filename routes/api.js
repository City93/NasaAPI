var express = require('express');
var router = express.Router();

const controllersLanding = require('../controllers/landings')
const controllersNeas = require('../controllers/neas')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/astronomy/landings/mass/:mass', controllersLanding.landings)
router.get('/astronomy/landings', controllersLanding.landings)
router.get('/astronomy/landings/class/:class', controllersLanding.landingClass)

router.get('/astronomy/neas', controllersNeas.neas)

module.exports = router;
