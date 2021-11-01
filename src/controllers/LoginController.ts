import { Request, Response } from 'express';
import { LoginService } from '../services/LoginService';

class LoginController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;

    const service = new LoginService();

    try {
      const result = await service.execute(code);

      return res.json(result);
    } catch (err) {
      res.json({ error: err.message });
    }
  }
}

export { LoginController };
