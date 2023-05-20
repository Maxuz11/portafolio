import { Router } from 'express';

import { inserRep, insertJuntaVecinal }from '../controllers/juntaVecinal';

const router = Router();

router.post('/', insertJuntaVecinal);
router.post('/insercion', inserRep);

export default router;