import { Router } from 'express';

import { insertJuntaVecinal }from '../controllers/juntaVecinal';

const router = Router();

router.post('/', insertJuntaVecinal);

export default router;