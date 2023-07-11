import { RatingModelOptions } from "./options/RatingModelOptions";
export default class RatingModel {
    private readonly name;
    private readonly initialValue;
    private readonly volatility;
    private readonly metadata;
    constructor(name: string, initialValue: number, volatility: number, options?: RatingModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
