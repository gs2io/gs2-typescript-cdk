import CategoryModelRef from "./CategoryModelRef";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    categoryModel(categoryName: string): CategoryModelRef;
    grn(): string;
}
