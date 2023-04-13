import { Router } from 'express';

import {
  filterByAllLibrary,
  createOneLibrary,
  updateOneLibrary,
  deleteOneLibrary,
} from './category.controller';

const router = Router();

router.get('/filterbyapplication', filterByAllLibrary);
router.post('/', createOneLibrary);
router.put('/', updateOneLibrary);
router.delete('/:makerId', deleteOneLibrary);

export default router;