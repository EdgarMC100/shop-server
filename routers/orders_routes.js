const express = require('express');
const orderController = require('../controllers/orders');

let router = express.Router();

router.route('/api/orders').get(orderController.showAll);

module.exports = router;