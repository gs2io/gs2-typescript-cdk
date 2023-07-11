import { MaterialOptions } from "./options/MaterialOptions";
export default class Material {
    private readonly materialItemSetId;
    private readonly count;
    constructor(materialItemSetId: string, count: number, options?: MaterialOptions | null);
    properties(): {
        [name: string]: any;
    };
}
