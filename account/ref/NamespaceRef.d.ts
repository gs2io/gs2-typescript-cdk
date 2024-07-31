import TakeOverTypeModelRef from "./TakeOverTypeModelRef";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    takeOverTypeModel(type: number): TakeOverTypeModelRef;
    grn(): string;
}
