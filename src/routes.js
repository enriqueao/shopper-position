const express = require('express');

const ShopperPositionController = require('./controllers/ShopperPositionController');
const IntegrityServerCheckController = require('./controllers/IntegrityServerCheckController');

const router = express.Router();

router.post('/position/:shopperId(\\d+)/', ShopperPositionController.insert);
router.get('/health-check', IntegrityServerCheckController.health);

module.exports = router;
