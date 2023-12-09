import { AcquireAction } from "../../core/model";
export default class CountDownByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly limitName;
    private readonly counterName;
    private readonly userId;
    private readonly countDownValue;
    constructor(namespaceName: string, limitName: string, counterName: string, countDownValue?: number | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
