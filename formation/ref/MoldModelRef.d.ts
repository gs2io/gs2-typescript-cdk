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
    formModel(): FormModelRef;
    addMoldCapacity(capacity: number, userId?: string): AddMoldCapacityByUserId;
    setMoldCapacity(capacity: number, userId?: string): SetMoldCapacityByUserId;
    acquireActionsToFormProperties(index: number, acquireAction: AcquireAction, config?: AcquireActionConfig[] | null, userId?: string): AcquireActionsToFormProperties;
    subMoldCapacity(capacity: number, userId?: string): SubMoldCapacityByUserId;
    grn(): string;
}
