import { AcquireAction } from "../../core/model";
export default class MultiplyAcquireActionsByUserId extends AcquireAction {
    constructor(namespaceName: string, experienceName: string, propertyId: string, rateName: string, acquireActions?: AcquireAction[] | null, userId?: string | null);
}
