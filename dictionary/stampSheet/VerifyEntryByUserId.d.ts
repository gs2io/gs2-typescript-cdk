import { ConsumeAction } from "../../core/model";
export default class VerifyEntryByUserId extends ConsumeAction {
    constructor(namespaceName: string, entryModelName: string, verifyType: string, userId?: string | null);
}
