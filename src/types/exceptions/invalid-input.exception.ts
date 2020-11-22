import { exception } from "console";

export class InvalidInputError extends Error {
    constructor(message: string) {
        super();
        this.message = message;
        this.name = "Validation Error"; // (different names for different built-in error classes)
      }
}