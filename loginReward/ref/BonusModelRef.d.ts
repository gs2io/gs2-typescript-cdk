export default class BonusModelRef {
    private readonly namespaceName;
    private readonly bonusModelName;
    constructor(namespaceName: string, bonusModelName: string);
    grn(): string;
}
