import { AcquireAction } from "../../core/model";
export default class MultiplyAcquireActionsByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly experienceName;
    private readonly propertyId;
    private readonly rateName;
    private readonly acquireActions;
    constructor(namespaceName: string, experienceName: string, propertyId: string, rateName: string, acquireActions?: AcquireAction[] | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
