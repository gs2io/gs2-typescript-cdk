import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
export default class DrawByUserId extends AcquireAction {
    constructor(namespaceName: string, lotteryName: string, count: number, config?: Config[] | null, userId?: string | null);
}
