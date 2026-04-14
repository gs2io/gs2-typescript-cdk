import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import FacetModelRef from "../ref/FacetModelRef";
import { FacetModelType } from "./enums/FacetModelType";
import { FacetModelOptions } from "./options/FacetModelOptions";
export default class FacetModel extends CdkResource {
    private readonly stack;
    private readonly namespaceName;
    private readonly field;
    private readonly type;
    private readonly displayName;
    private readonly order;
    constructor(stack: Stack, namespaceName: string, field: string, type: FacetModelType, displayName: string, options?: FacetModelOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): FacetModelRef;
    getAttrFacetModelId(): GetAttr;
}
