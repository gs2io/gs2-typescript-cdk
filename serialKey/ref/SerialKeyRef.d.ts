import UseByUserId from "../stampSheet/UseByUserId";
export default class SerialKeyRef {
    private namespaceName;
    private serialKeyCode;
    constructor(namespaceName: string, serialKeyCode: string);
    use(code: string, userId?: string): UseByUserId;
    grn(): string;
}
