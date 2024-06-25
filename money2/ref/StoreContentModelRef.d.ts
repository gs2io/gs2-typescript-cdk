export default class StoreContentModelRef {
    private readonly namespaceName;
    private readonly contentName;
    constructor(namespaceName: string, contentName: string);
    grn(): string;
}
