import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
export default class ReceiveByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly categoryName;
    private readonly config;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, categoryName: string, config?: Config[] | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
