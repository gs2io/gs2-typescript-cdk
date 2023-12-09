import { AcquireAction } from "../../core/model";
import Material from "../model/Material";
import { Config } from "../../core/model";
export default class DirectEnhanceByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly rateName;
    private readonly userId;
    private readonly targetItemSetId;
    private readonly materials;
    private readonly config;
    constructor(namespaceName: string, rateName: string, targetItemSetId: string, materials: Material[], config?: Config[] | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
