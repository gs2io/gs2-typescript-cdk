import { VerifyAction } from "../../core/model";
import { EntryVerifyType } from "./enums/EntryVerifyType";
export default class VerifyEntryByUserId extends VerifyAction {
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
