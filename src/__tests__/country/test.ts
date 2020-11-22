import countryService from "../../api/country/country.service"
import axios from 'axios'

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>
describe("Country Service", () => {
    const mockedValues = [
        {
            country: 'Finland',
            code: 'FIN',
            vat: 10
        },
        {
            country: 'Belgium',
            code: 'BE',
            vat: 21
        },
        {
            country: 'France',
            code: 'FR',
            vat: 20
        },
    ];
    
    it('Should return an array filtered by FIN', async () => {
        (axios.get as jest.Mock).mockReturnValueOnce({ data: mockedValues });
        process.env.COUNTRY_URL = "mock";
        const result = await countryService.filterCountries({ filter: 'fin'});
        expect(result.length).toEqual(1);
        expect(result[0].country === 'Finland').toEqual(true);
        expect(result[0].code === 'FIN').toEqual(true);
    })

    it('Should return a country array unfiltered and ordered ASC by VAT', async () => {
        // Arrange
        (axios.get as jest.Mock).mockReturnValueOnce({ data: mockedValues });
        process.env.COUNTRY_URL = "mock";

        // Act
        const result = await countryService.filterCountries({ order: 'asc' });

        // Assert
        expect(result.length).toEqual(3);
        expect(result[0].country === 'Finland').toEqual(true);
        expect(result[1].country === 'France').toEqual(true);
        expect(result[2].country === 'Belgium').toEqual(true);
    })

    it('Should throw since COUNTRY_URL is not set', async () => {
        // Arrange
        (axios.get as jest.Mock).mockReturnValueOnce({ data: mockedValues });
        process.env = {};

        // Act && Assert
        await expect(() => countryService.filterCountries({  })).rejects.toThrowError(Error);
    })
});

