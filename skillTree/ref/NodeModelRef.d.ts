export default class NodeModelRef {
    private readonly namespaceName;
    private readonly nodeModelName;
    constructor(namespaceName: string, nodeModelName: string);
    grn(): string;
}
