import { AcquireAction } from "../../core/model";
import JobEntry from "../model/JobEntry";
export default class PushByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly jobs;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, jobs?: JobEntry[] | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
