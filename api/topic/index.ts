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
 * '/api/makers':
 *  post:
 *     tags:
 *     - Makers
 *     summary: Register a maker
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateMakerRequest'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateMakerResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */