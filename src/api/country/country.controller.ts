import { CountryRequest } from '../../types/country-request';
import { Response } from 'express';
import { Request } from 'express';
import countryService from './country.service';
import { InvalidInputError } from '../../types/exceptions/invalid-input.exception';

class CountryController  {
  constructor() {
  }

  async getAll(req: Request, res: Response) {
    try {
      const countries = await countryService.filterCountries(req.query as CountryRequest).catch((error) => {
        throw error;
      });

      return res.json(countries);
    } catch (error) {
      if(error instanceof InvalidInputError){
        return res.json({ status: 'Error', error: error.message }).status(400);
      }
      return res.status(500).json(error.message);
    }
  }
}

export default new CountryController();
