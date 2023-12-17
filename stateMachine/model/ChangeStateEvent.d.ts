import { ChangeStateEventOptions } from "./options/ChangeStateEventOptions";
export default class ChangeStateEvent {
    private readonly taskName;
    private readonly hash;
    private readonly timestamp;
    constructor(taskName: string, hash: string, timestamp: number, options?: ChangeStateEventOptions | null);
    properties(): {
        [name: string]: any;
    };
}
