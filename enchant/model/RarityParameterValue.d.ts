import { RarityParameterValueOptions } from "./options/RarityParameterValueOptions";
export default class RarityParameterValue {
    private readonly name;
    private readonly resourceName;
    private readonly resourceValue;
    constructor(name: string, resourceName: string, resourceValue: number, options?: RarityParameterValueOptions | null);
    properties(): {
        [name: string]: any;
    };
}
