export default class GradeModelRef {
    private readonly namespaceName;
    private readonly gradeName;
    constructor(namespaceName: string, gradeName: string);
    grn(): string;
}
