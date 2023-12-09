import { ConsumeAction } from "../../core/model";
import { EntryVerifyType } from "./enum/EntryVerifyType";
export default class VerifyEntryByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly entryModelName;
    private readonly verifyType;
    constructor(namespaceName: string, entryModelName: string, verifyType: EntryVerifyType, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
