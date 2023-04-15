"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var topic_controller_1 = require("./topic.controller");
var router = (0, express_1.Router)();
router.get('/filterAllTopic', topic_controller_1.getAllTopic);
router.post('/', topic_controller_1.createOneTopic);
router.put('/', topic_controller_1.updateOneTopic);
router.delete('/:topicId', topic_controller_1.deleteOneTopic);
exports.default = router;
/**
 * @openapi
 * /api/topic/filterAllTopic:
 *  get:
 *    tags:
 *    - topics
 *    summary: Get topics by filter
 *    description: Get topic by filter page, name and urlImage
 *    responses:
 *      200:
 *        description: Get topic by page, name and urlImage
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ListTopicResponse'
 *      500:
 *        description: 'message: Something went wrong'
 */
/**
 * @openapi
 * '/api/topic':
 *  post:
 *     tags:
 *     - topic
 *     summary: Register a new topic
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateTopicRequest'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateTopicResponse'
 *      500:
 *        description: 'message: Something went wrong'
 */
/**
 * @openapi
 * /api/topic/:topicId:
 *  delete:
 *    tags:
 *    - topics
 *    summary: delete one topic by id
 *    description: Eliminate one topic by ID
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/DeleteOneTopicInput'
 *    responses:
 *      200:
 *        description: Get eliminate info topics
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateTopicResponse'
 *      500:
 *        description: 'message: Something went wrong'
 */ 
//# sourceMappingURL=index.js.map