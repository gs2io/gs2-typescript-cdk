import { AcquireAction } from "../../core/model";
export default class CreateAwaitByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly rateName;
    private readonly count;
    constructor(namespaceName: string, rateName: string, count?: number | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
