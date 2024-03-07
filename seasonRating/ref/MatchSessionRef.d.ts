export default class MatchSessionRef {
    private readonly namespaceName;
    private readonly sessionName;
    constructor(namespaceName: string, sessionName: string);
    grn(): string;
}
