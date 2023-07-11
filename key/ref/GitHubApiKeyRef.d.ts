export default class GitHubApiKeyRef {
    private readonly namespaceName;
    private readonly apiKeyName;
    constructor(namespaceName: string, apiKeyName: string);
    grn(): string;
}
