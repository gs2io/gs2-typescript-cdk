import { AcquireAction } from "../../core/model";
import { AwaitSkipType } from "./enum/AwaitSkipType";
export default class SkipByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly awaitName;
    private readonly skipType;
    private readonly minutes;
    private readonly rate;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, awaitName?: string | null, skipType?: AwaitSkipType | null, minutes?: number | null, rate?: number | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
