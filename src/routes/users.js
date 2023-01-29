const controllers = require('./../controllers/user_info/user.contollers');
var express = require('express');
var router = express.Router();

router.post('/signUp', controllers.userSignUp);
router.post('/login', controllers.loginUser);

// Swagger docs for GetAllUser

/**
 * @swagger
 * /app/user/getAllUser:
 *    get:
 *      summary: Return all the user
 *      descriptions: Get all books
 *      response: 
 *          200:
 *              descriptions: success
 *              content:
 *                  application/json:
 *                      type: object
 *    
 */
router.get('/getAllUser', controllers.getAllUser);
router.get('/getAllUserWithAddress', controllers.getUserWithAddress);
router.patch('/updateUser', controllers.updateUser);
router.delete('/deleteUser/:id', controllers.deleteUser);

module.exports = router;
