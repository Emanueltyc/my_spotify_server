import { Router } from 'express';

import { LoginController } from './controllers/LoginController';
import { RefreshTokenController } from './controllers/RefreshTokenController';

const router = Router();

router.post('/login', new LoginController().handle);
router.post('/refresh', new RefreshTokenController().handle);

export { router };
