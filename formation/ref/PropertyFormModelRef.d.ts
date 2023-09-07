import AcquireActionsToPropertyFormProperties from "../stampSheet/AcquireActionsToPropertyFormProperties";
import { AcquireAction } from "../../core/model";
import AcquireActionConfig from "../model/AcquireActionConfig";
export default class PropertyFormModelRef {
    private readonly namespaceName;
    private readonly propertyFormModelName;
    constructor(namespaceName: string, propertyFormModelName: string);
    acquireActionsToPropertyFormProperties(propertyId: string, acquireAction: AcquireAction, config?: AcquireActionConfig[] | null, userId?: string | null): AcquireActionsToPropertyFormProperties;
    grn(): string;
}
