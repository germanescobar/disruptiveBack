"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("./user.controller");
var router = (0, express_1.Router)();
router.get('/filterbyuser', user_controller_1.filterByAllUser);
router.post('/authenticate', user_controller_1.authenticateUser);
router.post('/', user_controller_1.createOneUser);
router.put('/', user_controller_1.updateOneUser);
router.delete('/:userId', user_controller_1.deleteOneUser);
exports.default = router;
/**
 * @openapi
 * /api/user/filterbyuser:
 *  get:
 *    tags:
 *    - Users
 *    summary: Get Users by filter
 *    description: Get user by filter page, email and type
 *    responses:
 *      200:
 *        description: Get User by page, email and type
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ListUserResponse'
 *      500:
 *        description: 'message: Something went wrong'
 */
/**
 * @openapi
 * '/api/user/authenticate':
 *  post:
 *     tags:
 *     - User
 *     summary: Login a User
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/AuthenticateRequest'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      500:
 *        description: 'message: Something went wrong'
 */
/**
 * @openapi
 * '/api/user':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a User
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserRequest'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      500:
 *        description: 'message: Something went wrong'
 */
/**
 * @openapi
 * /api/user/:userId:
 *  delete:
 *    tags:
 *    - Users
 *    summary: delete one user by id
 *    description: Eliminate one user by ID
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/DeleteOneUserInput'
 *    responses:
 *      200:
 *        description: Get User eliminate email and type
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      500:
 *        description: 'message: Something went wrong'
 */ 
//# sourceMappingURL=index.js.map