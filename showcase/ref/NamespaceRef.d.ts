import ForceReDrawByUserId from "../stampSheet/ForceReDrawByUserId";
import IncrementPurchaseCountByUserId from "../stampSheet/IncrementPurchaseCountByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    forceReDraw(showcaseName: string, userId?: string | null): ForceReDrawByUserId;
    incrementPurchaseCount(showcaseName: string, displayItemName: string, count: number, userId?: string | null): IncrementPurchaseCountByUserId;
    grn(): string;
}
