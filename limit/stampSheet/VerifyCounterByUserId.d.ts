import { ConsumeAction } from "../../core/model";
export default class VerifyCounterByUserId extends ConsumeAction {
    constructor(namespaceName: string, limitName: string, counterName: string, verifyType: string, count?: number | null, userId?: string | null);
}
