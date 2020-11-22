import { Router } from 'express';
import countryController from './country.controller';

const countryRouter = Router();

countryRouter.get('/', (req, res) => countryController.getAll(req, res));

export default countryRouter;
