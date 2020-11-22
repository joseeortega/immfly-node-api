import { InvalidInputError } from '../../types/exceptions/invalid-input.exception';

class ReverseService {

    reverse(input: string): string {
        try {
            this.validate(input);
            return input.split('').reverse().join('').replace(/[aeiou]/g, l => l.toUpperCase());
        } catch (err) {
            throw err;
        }
    }

    private validate(input: string) {
        if (input.length === 0) {
            throw new InvalidInputError("Input must be a valid string");
        }
    }
}

export default new ReverseService();
