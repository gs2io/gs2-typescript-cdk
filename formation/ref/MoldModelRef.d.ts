import FormModelRef from "./FormModelRef";
import AddMoldCapacityByUserId from "../stampSheet/AddMoldCapacityByUserId";
import SetMoldCapacityByUserId from "../stampSheet/SetMoldCapacityByUserId";
import AcquireActionsToFormProperties from "../stampSheet/AcquireActionsToFormProperties";
import { AcquireAction } from "../../core/model";
import AcquireActionConfig from "../model/AcquireActionConfig";
import SubMoldCapacityByUserId from "../stampSheet/SubMoldCapacityByUserId";
export default class MoldModelRef {
    private readonly namespaceName;
    private readonly moldModelName;
    constructor(namespaceName: string, moldModelName: string);
    formModel(formModelName: string): FormModelRef;
    addMoldCapacity(moldName: string, capacity: number, userId?: string | null): AddMoldCapacityByUserId;
    setMoldCapacity(moldName: string, capacity: number, userId?: string | null): SetMoldCapacityByUserId;
    acquireActionsToFormProperties(moldName: string, index: number, acquireAction: AcquireAction, config?: AcquireActionConfig[] | null, userId?: string | null): AcquireActionsToFormProperties;
    subMoldCapacity(moldName: string, capacity: number, userId?: string | null): SubMoldCapacityByUserId;
    grn(): string;
}
