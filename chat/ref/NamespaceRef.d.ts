import CategoryModelRef from "./CategoryModelRef";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    categoryModel(category: number): CategoryModelRef;
    grn(): string;
}
