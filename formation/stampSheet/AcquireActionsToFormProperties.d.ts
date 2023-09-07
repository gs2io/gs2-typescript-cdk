import { AcquireAction } from "../../core/model";
import AcquireActionConfig from "../model/AcquireActionConfig";
export default class AcquireActionsToFormProperties extends AcquireAction {
    constructor(namespaceName: string, moldModelName: string, index: number, acquireAction: AcquireAction, config?: AcquireActionConfig[] | null, userId?: string | null);
}
