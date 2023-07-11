import { AcquireAction } from "../../core/model";
import AcquireActionConfig from "../model/AcquireActionConfig";
export default class AcquireActionsToPropertyFormProperties extends AcquireAction {
    constructor(namespaceName: string, formModelName: string, propertyId: string, acquireAction: AcquireAction, config?: AcquireActionConfig[] | null, userId?: string | null);
}
