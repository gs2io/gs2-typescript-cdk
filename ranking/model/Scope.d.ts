import { ScopeOptions } from "./options/ScopeOptions";
export default class Scope {
    private readonly name;
    private readonly targetDays;
    constructor(name: string, targetDays: number, options?: ScopeOptions | null);
    properties(): {
        [name: string]: any;
    };
}
