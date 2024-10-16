import { AcquireAction } from "../../core/model";
import RandomStatus from "../model/RandomStatus";
export default class InvokeScript extends AcquireAction {
    private readonly scriptId;
    private readonly userId;
    private readonly args;
    private readonly randomStatus;
    private readonly timeOffsetToken;
    constructor(scriptId?: string | null, args?: string | null, randomStatus?: RandomStatus | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
