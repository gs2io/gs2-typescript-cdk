import AddMoldCapacityByUserId from "../stampSheet/AddMoldCapacityByUserId";
import SetMoldCapacityByUserId from "../stampSheet/SetMoldCapacityByUserId";
import AcquireActionsToFormProperties from "../stampSheet/AcquireActionsToFormProperties";
import { AcquireAction } from "../../core/model";
import AcquireActionConfig from "../model/AcquireActionConfig";
import SubMoldCapacityByUserId from "../stampSheet/SubMoldCapacityByUserId";
export default class MoldModelRef {
    private readonly namespaceName;
    private readonly moldName;
    constructor(namespaceName: string, moldName: string);
    addMoldCapacity(capacity: number, userId?: string | null): AddMoldCapacityByUserId;
    setMoldCapacity(capacity: number, userId?: string | null): SetMoldCapacityByUserId;
    acquireActionsToFormProperties(index: number, acquireAction: AcquireAction, config?: AcquireActionConfig[] | null, userId?: string | null): AcquireActionsToFormProperties;
    subMoldCapacity(capacity: number, userId?: string | null): SubMoldCapacityByUserId;
    grn(): string;
}
