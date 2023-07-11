import { AcquireAction } from "../../core/model";
export default class DeleteCounterByUserId extends AcquireAction {
    constructor(namespaceName: string, limitName: string, counterName: string, userId?: string | null);
}
