export default class OutputRef {
    private readonly namespaceName;
    private readonly uploadToken;
    private readonly outputName;
    constructor(namespaceName: string, uploadToken: string, outputName: string);
    grn(): string;
}
