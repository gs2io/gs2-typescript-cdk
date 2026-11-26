import { VerifyAction } from "../../core/model";
import { FormCountType } from "./enums/FormCountType";
import { FormVerifyType } from "./enums/FormVerifyType";
export default class VerifyFormByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly moldModelName;
    private readonly index;
    private readonly propertyIdRegex;
    private readonly verifyType;
    private readonly count;
    private readonly slotName;
    private readonly countType;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, moldModelName: string, index: number, propertyIdRegex: string, verifyType: FormVerifyType, count: number, slotName?: string | null, countType?: FormCountType | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
