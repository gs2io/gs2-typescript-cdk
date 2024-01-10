import AcquireActionsToPropertyFormProperties from "../stampSheet/AcquireActionsToPropertyFormProperties";
import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
export default class PropertyFormModelRef {
    private readonly namespaceName;
    private readonly propertyFormModelName;
    constructor(namespaceName: string, propertyFormModelName: string);
    acquireActionsToPropertyFormProperties(propertyId: string, acquireAction: AcquireAction, config?: Config[] | null, userId?: string): AcquireActionsToPropertyFormProperties;
    grn(): string;
}
