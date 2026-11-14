import AcquirePointByUserId from "../stampSheet/AcquirePointByUserId";
import ConsumePointByUserId from "../stampSheet/ConsumePointByUserId";
import VerifyPointByUserId from "../stampSheet/VerifyPointByUserId";
import { PointVerifyType } from "../stampSheet/enums/PointVerifyType";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    acquirePoint(point: number, userId?: string): AcquirePointByUserId;
    consumePoint(point: number, userId?: string): ConsumePointByUserId;
    verifyPoint(verifyType: PointVerifyType, point: number, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifyPointByUserId;
    grn(): string;
}
