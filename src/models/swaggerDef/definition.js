/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       email:
 *         type: string
 */

/**
 * @swagger
 * definitions:
 *   UserLogin:
 *     type: object
 *     properties:
 *       email:
 *         type: string
 *       password:
 *          type: string
 */

/**
 * @swagger
 * definitions:
 *   UserSingup:
 *     type: object
 *     properties:
 *       firstName:
 *          type: string
 *       lastName:
 *          type: string
 *       email:
 *         type: string
 *       password:
 *          type: string
 */

/**
 * @swagger
 * coomponents:
 *   responses:
 *      UnauthorizedError:
 *          description: Access token is missing or invalid
 */