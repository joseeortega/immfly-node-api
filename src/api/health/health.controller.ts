import { Response } from 'express';
import { Request } from 'express';

class HealthController  {
  async getStatus(req: Request, res: Response) {
    try{
      res.json("Up and running!!");
    } catch(e) {
      res.status(500).json("Error checking status");
    }
  }
}

export default new HealthController();