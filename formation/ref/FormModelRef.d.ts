import AcquireActionsToFormProperties from "../stampSheet/AcquireActionsToFormProperties";
import { AcquireAction } from "../../core/model";
import AcquireActionConfig from "../model/AcquireActionConfig";
export default class FormModelRef {
    private readonly namespaceName;
    private readonly formModelName;
    constructor(namespaceName: string, formModelName: string);
    acquireActionsToFormProperties(moldName: string, index: number, acquireAction: AcquireAction, config?: AcquireActionConfig[] | null, userId?: string | null): AcquireActionsToFormProperties;
    grn(): string;
}
