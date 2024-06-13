import RatingModelRef from "./RatingModelRef";
import SeasonModelRef from "./SeasonModelRef";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    ratingModel(ratingName: string): RatingModelRef;
    seasonModel(seasonName: string): SeasonModelRef;
    grn(): string;
}
