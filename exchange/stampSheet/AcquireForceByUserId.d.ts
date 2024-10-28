import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
export default class AcquireForceByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly awaitName;
    private readonly config;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, awaitName?: string | null, config?: Config[] | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
