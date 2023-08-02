import { JobResultBodyOptions } from "./options/JobResultBodyOptions";
export default class JobResultBody {
    private readonly tryNumber;
    private readonly statusCode;
    private readonly result;
    constructor(tryNumber: number, statusCode: number, result: string, options?: JobResultBodyOptions | null);
    properties(): {
        [name: string]: any;
    };
}
