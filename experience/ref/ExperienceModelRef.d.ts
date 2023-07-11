export default class ExperienceModelRef {
    private readonly namespaceName;
    private readonly experienceName;
    constructor(namespaceName: string, experienceName: string);
    grn(): string;
}
