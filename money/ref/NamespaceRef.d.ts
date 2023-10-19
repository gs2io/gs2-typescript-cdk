import DepositByUserId from "../stampSheet/DepositByUserId";
import RevertRecordReceipt from "../stampSheet/RevertRecordReceipt";
import WithdrawByUserId from "../stampSheet/WithdrawByUserId";
import RecordReceipt from "../stampSheet/RecordReceipt";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    deposit(slot: number, price: number, count: number, userId?: string | null): DepositByUserId;
    revertRecordReceipt(receipt: string, userId?: string | null): RevertRecordReceipt;
    withdraw(slot: number, count: number, paidOnly?: boolean | null, userId?: string | null): WithdrawByUserId;
    recordReceipt(contentsId: string, receipt: string, userId?: string | null): RecordReceipt;
    grn(): string;
}
