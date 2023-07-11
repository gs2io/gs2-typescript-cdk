import { ThresholdOptions } from "./options/ThresholdOptions";
export default class Threshold {
    private readonly values;
    private readonly metadata;
    constructor(values: number[], options?: ThresholdOptions | null);
    properties(): {
        [name: string]: any;
    };
}
