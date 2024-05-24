import { AcquireAction } from "../../core/model";
export default class AcquirePointByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly point;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, point: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
