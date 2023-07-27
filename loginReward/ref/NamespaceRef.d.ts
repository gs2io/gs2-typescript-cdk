import BonusModelRef from "./BonusModelRef";
import DeleteReceiveStatusByUserId from "../stampSheet/DeleteReceiveStatusByUserId";
import MarkReceivedByUserId from "../stampSheet/MarkReceivedByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    bonusModel(bonusModelName: string): BonusModelRef;
    deleteReceiveStatus(bonusModelName: string, userId?: string | null): DeleteReceiveStatusByUserId;
    markReceived(bonusModelName: string, stepNumber: number, userId?: string | null): MarkReceivedByUserId;
    grn(): string;
}