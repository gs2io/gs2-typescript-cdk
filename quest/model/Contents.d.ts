import { ContentsOptions } from "./options/ContentsOptions";
export default class Contents {
    private readonly weight;
    private readonly metadata;
    private readonly completeAcquireActions;
    constructor(weight: number, options?: ContentsOptions | null);
    properties(): {
        [name: string]: any;
    };
}
