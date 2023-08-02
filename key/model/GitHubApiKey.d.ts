import { GitHubApiKeyOptions } from "./options/GitHubApiKeyOptions";
export default class GitHubApiKey {
    private readonly name;
    private readonly apiKey;
    private readonly encryptionKeyName;
    private readonly description;
    constructor(name: string, apiKey: string, encryptionKeyName: string, options?: GitHubApiKeyOptions | null);
    properties(): {
        [name: string]: any;
    };
}
