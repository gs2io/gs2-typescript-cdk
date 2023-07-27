import { StackEntryOptions } from "./options/StackEntryOptions";
export default class StackEntry {
    private readonly stateMachineName;
    private readonly taskName;
    constructor(stateMachineName: string, taskName: string, options?: StackEntryOptions | null);
    properties(): {
        [name: string]: any;
    };
}
