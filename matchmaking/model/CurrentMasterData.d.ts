import { CdkResource, Stack } from "../../core/model";
import RatingModel from "./RatingModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly ratingModels;
    constructor(stack: Stack, namespaceName: string, ratingModels: RatingModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
