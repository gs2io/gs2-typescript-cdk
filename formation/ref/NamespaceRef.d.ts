import MoldModelRef from "./MoldModelRef";
import PropertyFormModelRef from "./PropertyFormModelRef";
import AddMoldCapacityByUserId from "../stampSheet/AddMoldCapacityByUserId";
import SetMoldCapacityByUserId from "../stampSheet/SetMoldCapacityByUserId";
import AcquireActionsToFormProperties from "../stampSheet/AcquireActionsToFormProperties";
import { AcquireAction } from "../../core/model";
import AcquireActionConfig from "../model/AcquireActionConfig";
import AcquireActionsToPropertyFormProperties from "../stampSheet/AcquireActionsToPropertyFormProperties";
import SubMoldCapacityByUserId from "../stampSheet/SubMoldCapacityByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    moldModel(moldModelName: string): MoldModelRef;
    propertyFormModel(propertyFormModelName: string): PropertyFormModelRef;
    addMoldCapacity(moldName: string, capacity: number, userId?: string | null): AddMoldCapacityByUserId;
    setMoldCapacity(moldName: string, capacity: number, userId?: string | null): SetMoldCapacityByUserId;
    acquireActionsToFormProperties(moldName: string, index: number, acquireAction: AcquireAction, config?: AcquireActionConfig[] | null, userId?: string | null): AcquireActionsToFormProperties;
    acquireActionsToPropertyFormProperties(propertyFormModelName: string, propertyId: string, acquireAction: AcquireAction, config?: AcquireActionConfig[] | null, userId?: string | null): AcquireActionsToPropertyFormProperties;
    subMoldCapacity(moldName: string, capacity: number, userId?: string | null): SubMoldCapacityByUserId;
    grn(): string;
}
