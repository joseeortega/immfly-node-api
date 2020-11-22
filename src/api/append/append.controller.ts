import { Response } from 'express';
import { Request } from 'express';
import { AppendRequest } from '../../types/append-request';
import { InvalidInputError } from '../../types/exceptions/invalid-input.exception';
import appendService from './append.service';

class AppendController  {

  buildArray(req: Request, res: Response) {
    try {
      const reversed = appendService.append(req.query as AppendRequest);
      return res.json(reversed);
    } catch (error) {
      if(error instanceof InvalidInputError){
        return res.json({ status: 'Error', error: error.message }).status(400);
      }
      return res.status(500).json(error.message);
    }
  }
}

export default new AppendController();
