import VerifyActionResult from "../VerifyActionResult";
import ConsumeActionResult from "../ConsumeActionResult";
import AcquireActionResult from "../AcquireActionResult";
export interface TransactionResultOptions {
    verifyResults?: VerifyActionResult[] | null;
    consumeResults?: ConsumeActionResult[] | null;
    acquireResults?: AcquireActionResult[] | null;
}
