import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
export default class IncrementalExchangeByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly rateName;
    private readonly userId;
    private readonly count;
    private readonly config;
    constructor(namespaceName: string, rateName: string, count: number, config?: Config[] | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
