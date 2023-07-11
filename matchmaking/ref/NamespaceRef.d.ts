import RatingModelRef from "./RatingModelRef";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    ratingModel(ratingName: string): RatingModelRef;
    grn(): string;
}
