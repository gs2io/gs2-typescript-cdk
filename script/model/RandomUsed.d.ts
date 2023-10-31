import { RandomUsedOptions } from "./options/RandomUsedOptions";
export default class RandomUsed {
    private readonly category;
    private readonly used;
    constructor(category: number, used: number, options?: RandomUsedOptions | null);
    properties(): {
        [name: string]: any;
    };
}
