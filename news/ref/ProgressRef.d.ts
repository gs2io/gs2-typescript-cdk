export default class ProgressRef {
    private readonly namespaceName;
    private readonly uploadToken;
    constructor(namespaceName: string, uploadToken: string);
    grn(): string;
}
