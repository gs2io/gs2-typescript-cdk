import MoldModelRef from "./MoldModelRef";
import FormModelRef from "./FormModelRef";
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
    moldModel(moldName: string): MoldModelRef;
    formModel(formModelName: string): FormModelRef;
    addMoldCapacity(moldName: string, capacity: number, userId?: string | null): AddMoldCapacityByUserId;
    setMoldCapacity(moldName: string, capacity: number, userId?: string | null): SetMoldCapacityByUserId;
    acquireActionsToFormProperties(moldName: string, index: number, acquireAction: AcquireAction, config?: AcquireActionConfig[] | null, userId?: string | null): AcquireActionsToFormProperties;
    acquireActionsToPropertyFormProperties(formModelName: string, propertyId: string, acquireAction: AcquireAction, config?: AcquireActionConfig[] | null, userId?: string | null): AcquireActionsToPropertyFormProperties;
    subMoldCapacity(moldName: string, capacity: number, userId?: string | null): SubMoldCapacityByUserId;
    grn(): string;
}
