import { Router } from 'express';
import reverseController from './reverse.controller';

const reverseRouter = Router();

reverseRouter.get('/:input', (req, res) => reverseController.reverse(req, res));

export default reverseRouter;
