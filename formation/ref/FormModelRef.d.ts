import AcquireActionsToFormProperties from "../stampSheet/AcquireActionsToFormProperties";
import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
import SetFormByUserId from "../stampSheet/SetFormByUserId";
import Slot from "../model/Slot";
export default class FormModelRef {
    private readonly namespaceName;
    private readonly moldModelName;
    constructor(namespaceName: string, moldModelName: string);
    acquireActionsToFormProperties(index: number, acquireAction: AcquireAction, config?: Config[] | null, userId?: string): AcquireActionsToFormProperties;
    setForm(index: number, slots: Slot[], userId?: string): SetFormByUserId;
    grn(): string;
}
