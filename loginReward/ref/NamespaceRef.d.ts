import BonusModelRef from "./BonusModelRef";
import DeleteReceiveStatusByUserId from "../stampSheet/DeleteReceiveStatusByUserId";
import UnmarkReceivedByUserId from "../stampSheet/UnmarkReceivedByUserId";
import MarkReceivedByUserId from "../stampSheet/MarkReceivedByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    bonusModel(bonusModelName: string): BonusModelRef;
    deleteReceiveStatus(bonusModelName: string, userId?: string): DeleteReceiveStatusByUserId;
    unmarkReceived(bonusModelName: string, stepNumber: number, userId?: string): UnmarkReceivedByUserId;
    markReceived(bonusModelName: string, stepNumber: number, userId?: string): MarkReceivedByUserId;
    grn(): string;
}
