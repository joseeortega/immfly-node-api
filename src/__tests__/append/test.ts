import appendService from "../../api/append/append.service";
import { AppendRequest } from "../../types/append-request";
import { InvalidInputError } from "../../types/exceptions/invalid-input.exception";

describe("Append array service", () => {

    it('Should return SIMPLE_ARRAY between inputs', () => {
        // Arrange 
        const request: AppendRequest = {
            start: "hi",
            end: "bye"
        };
        process.env.SIMPLE_ARRAY = "now,we,are,on,tests";

        //Act
        const result = appendService.append(request);

        // Assert
        expect(result).toEqual(["hi", "now", "we", "are", "on", "tests", "bye"]);
    })

    it('Should throw since SIMPLE_ARRAY is invalid', async () => {
        //Arrange
        const request: AppendRequest = {
            start: "hi",
            end: "bye"
        };
        process.env = {};
        // Act and Assert
        expect(() => appendService.append(request)).toThrowError(InvalidInputError);
    })
});

