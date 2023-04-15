import { Router } from 'express';

import {
  getAllTopic,
  createOneTopic,
  updateOneTopic,
  deleteOneTopic,
} from './topic.controller';

const router = Router();

router.get('/filterAllTopic', getAllTopic);
router.post('/', createOneTopic);
router.put('/', updateOneTopic);
router.delete('/:topicId', deleteOneTopic);

export default router;

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