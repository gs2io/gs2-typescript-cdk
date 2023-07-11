import { AcquireAction } from "../../core/model";
export default class CreateAwaitByUserId extends AcquireAction {
    constructor(namespaceName: string, rateName: string, count?: number | null, userId?: string | null);
}
