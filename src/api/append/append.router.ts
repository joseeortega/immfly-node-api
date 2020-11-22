import { Router } from 'express';
import appendController from './append.controller';

const appendRouter = Router();

appendRouter.get('/', (req, res) => appendController.buildArray(req, res));

export default appendRouter;
