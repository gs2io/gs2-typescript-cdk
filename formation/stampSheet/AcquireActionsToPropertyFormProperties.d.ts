import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
export default class AcquireActionsToPropertyFormProperties extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly propertyFormModelName;
    private readonly propertyId;
    private readonly acquireAction;
    private readonly config;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, propertyFormModelName: string, propertyId: string, acquireAction: AcquireAction, config?: Config[] | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
