import StoreContentModelRef from "./StoreContentModelRef";
import DepositByUserId from "../stampSheet/DepositByUserId";
import DepositTransaction from "../model/DepositTransaction";
import WithdrawByUserId from "../stampSheet/WithdrawByUserId";
import VerifyReceiptByUserId from "../stampSheet/VerifyReceiptByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    storeContentModel(contentName: string): StoreContentModelRef;
    deposit(slot: number, depositTransactions: DepositTransaction[], userId?: string): DepositByUserId;
    withdraw(slot: number, withdrawCount: number, paidOnly?: boolean | null, userId?: string): WithdrawByUserId;
    verifyReceipt(contentName: string, receipt?: string, userId?: string): VerifyReceiptByUserId;
    grn(): string;
}
