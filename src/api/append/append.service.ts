import { AppendRequest } from '../../types/append-request';
import { InvalidInputError } from '../../types/exceptions/invalid-input.exception';

class AppendService {

    append(request: AppendRequest): string[] {
        try {
            const response : string[] = this.tryGetBaseArray();
            this.validate(request);
            response.unshift(request.start);
            response.push(request.end);
            return response;
        } catch (err) {
            throw err;
        }
    }

    private validate(request: AppendRequest) {
        if (request && (!request.end || !request.start)) {
            throw new InvalidInputError("Start and End should be valid values.");
        }
    }

    private tryGetBaseArray() : string[] {
        const response : string[] = process.env.SIMPLE_ARRAY?.split(',') ?? [];
        if(response.length === 0){
            throw new InvalidInputError("Array from ENV should be valid.");
        }

        return response;
    }
}

export default new AppendService();
