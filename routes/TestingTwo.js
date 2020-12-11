const express = require('express');
const router = express.Router();
const controllerResult = require('../controller/ControllerResult');

router.post('/reverse', controllerResult.reverse);
router.post('/fibonacci', controllerResult.fibonacci);
router.post('/combination', controllerResult.combination);

module.exports = router;