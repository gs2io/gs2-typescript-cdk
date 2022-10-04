import DrawnPrize from "./DrawnPrize";
export interface ProbabilityOptions {
}
export default class Probability {
    private readonly prize;
    private readonly rate;
    constructor(prize: DrawnPrize, rate: number, options?: ProbabilityOptions);
    properties(): {
        [name: string]: any;
    };
}
