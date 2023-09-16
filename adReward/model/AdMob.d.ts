import { AdMobOptions } from "./options/AdMobOptions";
export default class AdMob {
    private readonly allowAdUnitIds;
    constructor(allowAdUnitIds: string[], options?: AdMobOptions | null);
    properties(): {
        [name: string]: any;
    };
}
