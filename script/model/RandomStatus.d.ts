import { RandomStatusOptions } from "./options/RandomStatusOptions";
export default class RandomStatus {
    private readonly seed;
    private readonly used;
    constructor(seed: number, options?: RandomStatusOptions | null);
    properties(): {
        [name: string]: any;
    };
}
