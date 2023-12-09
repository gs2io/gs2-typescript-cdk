import { AcquireAction } from "../../core/model";
import Material from "../model/Material";
export default class CreateProgressByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly rateName;
    private readonly targetItemSetId;
    private readonly materials;
    private readonly force;
    constructor(namespaceName: string, rateName: string, targetItemSetId: string, materials?: Material[] | null, force?: boolean | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
