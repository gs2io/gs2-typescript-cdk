import BuffEntryModelRef from "./BuffEntryModelRef";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    buffEntryModel(buffEntryName: string): BuffEntryModelRef;
    grn(): string;
}
