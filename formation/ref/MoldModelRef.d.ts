import FormModelRef from "./FormModelRef";
import AddMoldCapacityByUserId from "../stampSheet/AddMoldCapacityByUserId";
import SetMoldCapacityByUserId from "../stampSheet/SetMoldCapacityByUserId";
import AcquireActionsToFormProperties from "../stampSheet/AcquireActionsToFormProperties";
import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
import SetFormByUserId from "../stampSheet/SetFormByUserId";
import Slot from "../model/Slot";
import SubMoldCapacityByUserId from "../stampSheet/SubMoldCapacityByUserId";
import VerifyFormByUserId from "../stampSheet/VerifyFormByUserId";
import { FormCountType } from "../stampSheet/enums/FormCountType";
import { FormVerifyType } from "../stampSheet/enums/FormVerifyType";
export default class MoldModelRef {
    private readonly namespaceName;
    private readonly moldModelName;
    constructor(namespaceName: string, moldModelName: string);
    formModel(): FormModelRef;
    addMoldCapacity(capacity: number, userId?: string): AddMoldCapacityByUserId;
    setMoldCapacity(capacity: number, userId?: string): SetMoldCapacityByUserId;
    acquireActionsToFormProperties(index: number, acquireAction: AcquireAction, config?: Config[] | null, userId?: string): AcquireActionsToFormProperties;
    setForm(index: number, slots: Slot[], userId?: string): SetFormByUserId;
    subMoldCapacity(capacity: number, userId?: string): SubMoldCapacityByUserId;
    verifyForm(index: number, propertyIdRegex: string, verifyType: FormVerifyType, count: number, slotName?: string | null, countType?: FormCountType | null, userId?: string): VerifyFormByUserId;
    grn(): string;
}
