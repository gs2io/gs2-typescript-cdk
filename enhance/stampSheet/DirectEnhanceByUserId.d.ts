import { AcquireAction } from "../../core/model";
import Material from "../model/Material";
import { Config } from "../../core/model";
export default class DirectEnhanceByUserId extends AcquireAction {
    constructor(namespaceName: string, rateName: string, targetItemSetId: string, materials: Material[], config?: Config[] | null, userId?: string | null);
}
