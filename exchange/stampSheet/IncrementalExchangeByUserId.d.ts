import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
export default class IncrementalExchangeByUserId extends AcquireAction {
    constructor(namespaceName: string, rateName: string, count: number, config?: Config[] | null, userId?: string | null);
}
