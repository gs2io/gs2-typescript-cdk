import { AcquireAction } from "../../core/model";
export default class DeleteCounterByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly limitName;
    private readonly userId;
    private readonly counterName;
    constructor(namespaceName: string, limitName: string, counterName: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
