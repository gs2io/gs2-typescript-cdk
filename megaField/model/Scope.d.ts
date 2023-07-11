import { ScopeOptions } from "./options/ScopeOptions";
export default class Scope {
    private readonly layerName;
    private readonly r;
    private readonly limit;
    constructor(layerName: string, r: number, limit: number, options?: ScopeOptions | null);
    properties(): {
        [name: string]: any;
    };
}
