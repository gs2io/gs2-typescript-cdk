import NodeModelRef from "./NodeModelRef";
import MarkReleaseByUserId from "../stampSheet/MarkReleaseByUserId";
import MarkRestrainByUserId from "../stampSheet/MarkRestrainByUserId";
import VerifyStatusByUserId from "../stampSheet/VerifyStatusByUserId";
import { StatusVerifyType } from "../stampSheet/enums/StatusVerifyType";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    nodeModel(nodeModelName: string): NodeModelRef;
    markRelease(propertyId: string, nodeModelNames: string[], userId?: string): MarkReleaseByUserId;
    markRestrain(propertyId: string, nodeModelNames: string[], userId?: string): MarkRestrainByUserId;
    verifyStatus(propertyId: string, nodeModelName: string, verifyType: StatusVerifyType, userId?: string): VerifyStatusByUserId;
    grn(): string;
}
