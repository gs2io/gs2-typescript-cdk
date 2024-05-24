import { AppLovinMaxOptions } from "./options/AppLovinMaxOptions";
export default class AppLovinMax {
    private readonly allowAdUnitId;
    private readonly eventKey;
    constructor(allowAdUnitId: string, eventKey: string, options?: AppLovinMaxOptions | null);
    properties(): {
        [name: string]: any;
    };
}
