export default class LastGuildMasterActivityRef {
    private readonly namespaceName;
    private readonly guildModelName;
    private readonly guildName;
    constructor(namespaceName: string, guildModelName: string, guildName: string);
    grn(): string;
}
