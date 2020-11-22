import { Router } from 'express';
import healthController from './health.controller';

const healthRouter = Router();

healthRouter.get('/', (req, res) => healthController.getStatus(req, res));

export default healthRouter;
