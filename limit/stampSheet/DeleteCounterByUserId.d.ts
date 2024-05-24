import { AcquireAction } from "../../core/model";
export default class DeleteCounterByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly limitName;
    private readonly userId;
    private readonly counterName;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, limitName: string, counterName: string, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
