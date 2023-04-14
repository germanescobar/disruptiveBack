import { Router } from 'express';

import {
  filterByAllUser,
  authenticateUser,
  createOneUser,
  updateOneUser,
  deleteOneUser,
} from './user.controller';

const router = Router();

router.get('/filterbyuser', filterByAllUser);
router.post('/authenticate', authenticateUser);
router.post('/', createOneUser);
router.put('/', updateOneUser);
router.delete('/:userId', deleteOneUser);

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