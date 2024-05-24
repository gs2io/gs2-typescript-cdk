import { ConsumeAction } from "../../core/model";
import { EntryVerifyType } from "./enum/EntryVerifyType";
export default class VerifyEntryByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly entryModelName;
    private readonly verifyType;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, entryModelName: string, verifyType: EntryVerifyType, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
