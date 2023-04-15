"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var content_controller_1 = require("./content.controller");
var router = (0, express_1.Router)();
router.get('/filterbycontent', content_controller_1.filterByAllContent);
router.post('/', content_controller_1.createOneContent);
router.put('/', content_controller_1.updateOneContent);
router.delete('/:contentId', content_controller_1.deleteOneContent);
exports.default = router;
/**
 * @openapi
 * /api/content/filterbycontent:
 *  get:
 *    tags:
 *    - Contents
 *    summary: Get contents by filter
 *    description: Get content by filter name, topicName userId and category
 *    responses:
 *      200:
 *        description: Get content by filter
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ListContentResponse'
 *      500:
 *        description: 'message: Something went wrong'
 */
/**
 * @openapi
 * '/api/content':
 *  post:
 *     tags:
 *     - content
 *     summary: Register a new content
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateContentRequest'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateContentResponse'
 *      500:
 *        description: 'message: Something went wrong'
 */
/**
 * @openapi
 * /api/content/:contentId:
 *  delete:
 *    tags:
 *    - contents
 *    summary: delete one content by id
 *    description: Eliminate one content by ID
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/DeleteOneContentInput'
 *    responses:
 *      200:
 *        description: Get eliminate info content
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateContentResponse'
 *      500:
 *        description: 'message: Something went wrong'
 */ 
//# sourceMappingURL=index.js.map