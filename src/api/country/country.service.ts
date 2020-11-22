import { Country } from './../../types/country.d';
import { CountryRequest } from '../../types/country-request';
import axios from 'axios';
import { InvalidInputError } from '../../types/exceptions/invalid-input.exception';

class CountryService {

    async filterCountries(request: CountryRequest): Promise<Country[]> {
        try {
            this.validate(request);
            let countries = await this.getCountries();

            if (request.filter) {
                countries = countries.filter(
                    element =>
                        element.country
                            .toLocaleLowerCase()
                            .includes(request.filter!.toLocaleLowerCase())
                        || element.code
                            .toLocaleLowerCase()
                            .includes(request.filter!.toLocaleLowerCase())
                );
            }
            if (request.order) {
                countries = countries.sort((a, b) => (request.order === 'asc' ? (a.vat - b.vat) : (b.vat - a.vat)))
            }
            return countries;
        } catch (err) {
            throw err;
        }
    }

    private validate(request: CountryRequest) {
        if (request.order && request.order !== 'asc' && request.order !== 'desc') {
            if (process.env.THROW_ON_INVALID_SORT) {
                throw new InvalidInputError("Invalid sort.");
            }
        }
    }

    private async getCountries(): Promise<Country[]> {
        if (!process.env.COUNTRY_URL) {
            throw new Error("Country URL is not defined.")
        }
        return (await axios.get(process.env.COUNTRY_URL)).data;
    }
}

export default new CountryService()
