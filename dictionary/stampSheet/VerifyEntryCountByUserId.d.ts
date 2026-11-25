import { VerifyAction } from "../../core/model";
import { EntryVerifyType } from "./enums/EntryVerifyType";
export default class VerifyEntryCountByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly verifyType;
    private readonly count;
    private readonly entryModelNames;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, verifyType: EntryVerifyType, count: number, entryModelNames?: string[] | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
