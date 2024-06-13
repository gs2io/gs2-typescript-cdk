import { CdkResource, Stack } from "../../core/model";
import RatingModel from "./RatingModel";
import SeasonModel from "./SeasonModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly ratingModels;
    private readonly seasonModels;
    constructor(stack: Stack, namespaceName: string, ratingModels: RatingModel[], seasonModels: SeasonModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
