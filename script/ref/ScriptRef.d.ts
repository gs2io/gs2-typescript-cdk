export default class ScriptRef {
    private readonly namespaceName;
    private readonly scriptName;
    constructor(namespaceName: string, scriptName: string);
    grn(): string;
}
