const controllers = require('./../controllers/user_info/address.contollers');
var express = require('express');
var router = express.Router();

router.post('/addUserAddress', controllers.addingUserAddress);
router.get('/getUserWithAddress', controllers.getUserWithAddress);

module.exports = router;
