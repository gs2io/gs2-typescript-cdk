export default class RatingModelRef {
    private readonly namespaceName;
    private readonly ratingName;
    constructor(namespaceName: string, ratingName: string);
    grn(): string;
}
