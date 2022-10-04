export interface JobResultBodyOptions {
}
export default class JobResultBody {
    private readonly tryNumber;
    private readonly statusCode;
    private readonly result;
    private readonly tryAt;
    constructor(tryNumber: number, statusCode: number, result: string, tryAt: number, options?: JobResultBodyOptions);
    properties(): {
        [name: string]: any;
    };
}
