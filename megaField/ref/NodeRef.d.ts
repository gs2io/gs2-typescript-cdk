export default class NodeRef {
    private readonly namespaceName;
    private readonly nodeName;
    constructor(namespaceName: string, nodeName: string);
    grn(): string;
}
