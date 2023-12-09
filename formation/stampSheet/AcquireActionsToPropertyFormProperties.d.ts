import { AcquireAction } from "../../core/model";
import AcquireActionConfig from "../model/AcquireActionConfig";
export default class AcquireActionsToPropertyFormProperties extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly propertyFormModelName;
    private readonly propertyId;
    private readonly acquireAction;
    private readonly config;
    constructor(namespaceName: string, propertyFormModelName: string, propertyId: string, acquireAction: AcquireAction, config?: AcquireActionConfig[] | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
