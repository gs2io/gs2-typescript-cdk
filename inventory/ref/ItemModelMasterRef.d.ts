export default class ItemModelMasterRef {
    private namespaceName;
    private inventoryName;
    private itemName;
    constructor(namespaceName: string, inventoryName: string, itemName: string);
    grn(): string;
}
