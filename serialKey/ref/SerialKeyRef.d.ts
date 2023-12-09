import UseByUserId from "../stampSheet/UseByUserId";
export default class SerialKeyRef {
    private readonly namespaceName;
    private readonly code;
    constructor(namespaceName: string, code: string);
    use(userId?: string): UseByUserId;
    grn(): string;
}
