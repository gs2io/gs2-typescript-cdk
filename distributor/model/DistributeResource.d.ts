export interface DistributeResourceOptions {
}
export default class DistributeResource {
    private readonly action;
    private readonly request;
    constructor(action: string, request: string, options?: DistributeResourceOptions);
    properties(): {
        [name: string]: any;
    };
}
