import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
export default class UnleashByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly rateName;
    private readonly userId;
    private readonly targetItemSetId;
    private readonly materials;
    private readonly config;
    constructor(namespaceName: string, rateName: string, targetItemSetId: string, materials: string[], config?: Config[] | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
