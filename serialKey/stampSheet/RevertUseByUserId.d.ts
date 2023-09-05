import { AcquireAction } from "../../core/model";
export default class RevertUseByUserId extends AcquireAction {
    constructor(namespaceName: string, code: string, userId?: string | null);
}
