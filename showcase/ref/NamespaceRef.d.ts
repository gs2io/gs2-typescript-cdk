import DecrementPurchaseCountByUserId from "../stampSheet/DecrementPurchaseCountByUserId";
import ForceReDrawByUserId from "../stampSheet/ForceReDrawByUserId";
import IncrementPurchaseCountByUserId from "../stampSheet/IncrementPurchaseCountByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    decrementPurchaseCount(showcaseName: string, displayItemName: string, count: number, userId?: string): DecrementPurchaseCountByUserId;
    forceReDraw(showcaseName: string, userId?: string): ForceReDrawByUserId;
    incrementPurchaseCount(showcaseName: string, displayItemName: string, count: number, userId?: string): IncrementPurchaseCountByUserId;
    grn(): string;
}
