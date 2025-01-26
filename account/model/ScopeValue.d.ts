import { ScopeValueOptions } from "./options/ScopeValueOptions";
export default class ScopeValue {
    private readonly key;
    private readonly value;
    constructor(key: string, options?: ScopeValueOptions | null);
    properties(): {
        [name: string]: any;
    };
}
