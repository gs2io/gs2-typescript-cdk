import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
export default class CreateAwaitByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly rateName;
    private readonly count;
    private readonly config;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, rateName: string, count?: number | null, config?: Config[] | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
