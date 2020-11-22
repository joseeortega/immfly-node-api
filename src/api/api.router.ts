import { Router } from 'express';
import appendRouter from './append/append.router';
import countryRouter from './country/country.router';
import healthRouter from './health/health.router';
import reverseRouter from './reverse/reverse.router';

const apiRouter = Router();

apiRouter.use('/countries', countryRouter);
apiRouter.use('/reverse', reverseRouter);
apiRouter.use('/append', appendRouter);
apiRouter.use('/health', healthRouter);

export default apiRouter;
