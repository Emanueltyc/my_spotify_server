import { Router } from 'express';

import { RefreshTokenController } from './controllers/RefreshTokenController';

const router = Router();

router.post('/refresh', new RefreshTokenController().handle);

export { router };
