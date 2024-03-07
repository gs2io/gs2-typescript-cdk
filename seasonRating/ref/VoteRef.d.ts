export default class VoteRef {
    private readonly namespaceName;
    private readonly seasonName;
    private readonly sessionName;
    constructor(namespaceName: string, seasonName: string, sessionName: string);
    grn(): string;
}
