import { FacetOptions } from "./options/FacetOptions";
export default class Facet {
    private readonly field;
    private readonly values;
    private readonly range;
    private readonly globalRange;
    constructor(field: string, options?: FacetOptions | null);
    properties(): {
        [name: string]: any;
    };
}
