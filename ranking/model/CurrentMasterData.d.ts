import { CdkResource, Stack } from "../../core/model";
import CategoryModel from "./CategoryModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly categories;
    constructor(stack: Stack, namespaceName: string, categories: CategoryModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
