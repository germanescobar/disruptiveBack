import { Router } from 'express';

import {
  filterByAllContent,
  createOneContent,
  updateOneContent,
  deleteOneContent,
} from './content.controller';

const router = Router();

router.get('/filterbycontent', filterByAllContent);
router.post('/', createOneContent);
router.put('/', updateOneContent);
router.delete('/:contentId', deleteOneContent);

export default router;

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