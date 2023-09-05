import { AcquireAction } from "../../core/model";
export default class CountDownByUserId extends AcquireAction {
    constructor(namespaceName: string, limitName: string, counterName: string, countDownValue?: number | null, userId?: string | null);
}
