import { Response } from 'express';
import { Request } from 'express';
import { InvalidInputError } from '../../types/exceptions/invalid-input.exception';
import reverseService from './reverse.service';

class ReverseController  {

  reverse(req: Request, res: Response) {
    try {
      const reversed = reverseService.reverse(req.params.input);
      return res.json(reversed);
    } catch (error) {
      if(error instanceof InvalidInputError){
        return res.json({ status: 'Error', error: error.message }).status(400);
      }
      return res.status(500).json(error.message);
    }
  }
}

export default new ReverseController();
