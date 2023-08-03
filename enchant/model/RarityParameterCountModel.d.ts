import { RarityParameterCountModelOptions } from "./options/RarityParameterCountModelOptions";
export default class RarityParameterCountModel {
    private readonly count;
    private readonly weight;
    constructor(count: number, weight: number, options?: RarityParameterCountModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
