import AcquireActionsToFormProperties from "../stampSheet/AcquireActionsToFormProperties";
import { AcquireAction } from "../../core/model";
import AcquireActionConfig from "../model/AcquireActionConfig";
export default class FormModelRef {
    private readonly namespaceName;
    private readonly moldModelName;
    private readonly formModelName;
    constructor(namespaceName: string, moldModelName: string, formModelName: string);
    acquireActionsToFormProperties(index: number, acquireAction: AcquireAction, config?: AcquireActionConfig[] | null, userId?: string | null): AcquireActionsToFormProperties;
    grn(): string;
}
