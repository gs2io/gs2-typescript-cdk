import { VerifyAction } from "../../core/model";
import { PointVerifyType } from "./enums/PointVerifyType";
export default class VerifyPointByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly verifyType;
    private readonly point;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, verifyType: PointVerifyType, point: number, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
