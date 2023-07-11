import { DistributeResourceOptions } from "./options/DistributeResourceOptions";
export default class DistributeResource {
    private readonly action;
    private readonly request;
    constructor(action: string, request: string, options?: DistributeResourceOptions | null);
    properties(): {
        [name: string]: any;
    };
}
