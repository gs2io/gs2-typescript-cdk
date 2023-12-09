import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
export default class CreateProgressByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly questModelId;
    private readonly force;
    private readonly config;
    constructor(namespaceName: string, questModelId: string, force?: boolean | null, config?: Config[] | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
