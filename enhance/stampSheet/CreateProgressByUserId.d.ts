import { AcquireAction } from "../../core/model";
import Material from "../model/Material";
export default class CreateProgressByUserId extends AcquireAction {
    constructor(namespaceName: string, rateName: string, targetItemSetId: string, materials?: Material[] | null, force?: boolean | null, userId?: string | null);
}
