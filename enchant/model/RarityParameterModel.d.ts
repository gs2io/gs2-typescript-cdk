import RarityParameterCountModel from "./RarityParameterCountModel";
import RarityParameterValueModel from "./RarityParameterValueModel";
import { RarityParameterModelOptions } from "./options/RarityParameterModelOptions";
export default class RarityParameterModel {
    private readonly name;
    private readonly maximumParameterCount;
    private readonly parameterCounts;
    private readonly parameters;
    private readonly metadata;
    constructor(name: string, maximumParameterCount: number, parameterCounts: RarityParameterCountModel[], parameters: RarityParameterValueModel[], options?: RarityParameterModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
