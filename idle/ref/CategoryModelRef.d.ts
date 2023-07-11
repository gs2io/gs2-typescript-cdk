export default class CategoryModelRef {
    private readonly namespaceName;
    private readonly categoryName;
    constructor(namespaceName: string, categoryName: string);
    grn(): string;
}
