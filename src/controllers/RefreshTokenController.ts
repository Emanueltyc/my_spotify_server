import { Request, Response } from 'express';
import { RefreshTokenService } from '../services/RefreshTokenService';

class RefreshTokenController {
  async handle(req: Request, res: Response) {
    const { refreshToken } = req.body;

    const service = new RefreshTokenService();

    try {
      const result = await service.execute(refreshToken);

      return res.json(result);
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
}

export { RefreshTokenController };
