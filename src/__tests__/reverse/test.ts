import reverseService from "../../api/reverse/reverse.service";
import { InvalidInputError } from "../../types/exceptions/invalid-input.exception";

describe("Reverse Input Service", () => {

    it('Should return reversed input', () => {
        // Arrange and Act
        const result = reverseService.reverse("hello");

        // Assert
        expect(result).toBe("OllEh");
    })

    it('Should throw since input is empty', async () => {
        // Arrange, Act and Assert
        expect(() => reverseService.reverse("")).toThrowError(InvalidInputError);
    })
});

