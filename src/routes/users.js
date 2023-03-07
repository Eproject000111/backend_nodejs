const controllers = require('./../controllers/user_info/user.contollers');
var express = require('express');
var router = express.Router();

router.post('/signUp', controllers.userSignUp);
router.post('/login', controllers.loginUser);

// Swagger docs for GetAllUser

/**
 * @swagger
 * /app/user/getAllUser:
 *   get:
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: A single user object
 */
router.get('/getAllUser', controllers.getAllUser);

router.get('/getAllUserWithAddress', controllers.getUserWithAddress);

/**
 * @swagger
 * /app/user/updateUser:
 *   put:
 *     tags:
 *       - Users
 *     name: Update user
 *     summary: Update User Details
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/User'
 *           type: object
 *           properties:
 *             id:
 *              type: string
 *             email:
 *              type: string
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *         required:
 *           - id
 *           - email
 *           - firstName
 *           - lastName
 *     responses:
 *       '200':
 *         description: User's password successfully updated
 *       '403':
 *         description: User is not authorized to change their password
 *       '404':
 *         description: User is not found in db to update
 *
 */

router.put('/updateUser', controllers.updateUser);


/**
 * @swagger
 * /app/user/deleteUser/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     name: Delete user
 *     summary: Delete User Details
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *           type: object
 *     responses:
 *       '200':
 *         description: User's password successfully updated
 *       '403':
 *         description: User is not authorized to change their password
 *       '404':
 *         description: User is not found in db to update
 *
 */

router.delete('/deleteUser/:id', controllers.deleteUser);

module.exports = router;




// For Future Use
// /**
//  * @swagger
//  * /loginUser:
//  *   post:
//  *     tags:
//  *       - Users
//  *     name: Login
//  *     summary: Logs in a user
//  *     produces:
//  *       - application/json
//  *     consumes:
//  *       - application/json
//  *     parameters:
//  *       - name: body
//  *         in: body
//  *         schema:
//  *           $ref: '#/definitions/User'
//  *           type: object
//  *           properties:
//  *             username:
//  *               type: string
//  *             password:
//  *               type: string
//  *               format: password
//  *         required:
//  *           - username
//  *           - password
//  *     responses:
//  *       '200':
//  *         description: User found and logged in successfully
//  *       '401':
//  *         description: Bad username, not found in db
//  *       '403':
//  *         description: Username and password don't match
//  */
