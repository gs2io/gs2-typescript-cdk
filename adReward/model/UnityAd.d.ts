import { UnityAdOptions } from "./options/UnityAdOptions";
export default class UnityAd {
    private readonly keys;
    constructor(options?: UnityAdOptions | null);
    properties(): {
        [name: string]: any;
    };
}
