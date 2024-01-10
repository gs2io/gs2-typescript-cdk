import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
export default class AcquireActionsToFormProperties extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly moldModelName;
    private readonly index;
    private readonly acquireAction;
    private readonly config;
    constructor(namespaceName: string, moldModelName: string, index: number, acquireAction: AcquireAction, config?: Config[] | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
