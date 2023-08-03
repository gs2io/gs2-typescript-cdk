import { RarityParameterValueModelOptions } from "./options/RarityParameterValueModelOptions";
export default class RarityParameterValueModel {
    private readonly name;
    private readonly resourceName;
    private readonly resourceValue;
    private readonly weight;
    private readonly metadata;
    constructor(name: string, resourceName: string, resourceValue: number, weight: number, options?: RarityParameterValueModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
