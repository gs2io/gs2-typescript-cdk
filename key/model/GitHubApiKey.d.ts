import { GitHubApiKeyOptions } from "./options/GitHubApiKeyOptions";
export default class GitHubApiKey {
    private readonly name;
    private readonly apiKey;
    private readonly encryptionKeyName;
    private readonly createdAt;
    private readonly updatedAt;
    private readonly description;
    constructor(name: string, apiKey: string, encryptionKeyName: string, createdAt: number, updatedAt: number, options?: GitHubApiKeyOptions | null);
    properties(): {
        [name: string]: any;
    };
}
