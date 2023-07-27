import { AcquireAction } from "../../core/model";
export default class StartStateMachineByUserId extends AcquireAction {
    constructor(namespaceName: string, args?: string | null, ttl?: number | null, userId?: string | null);
}
