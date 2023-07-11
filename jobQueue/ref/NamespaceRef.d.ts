import PushByUserId from "../stampSheet/PushByUserId";
import JobEntry from "../model/JobEntry";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    push(jobs?: JobEntry[] | null, userId?: string | null): PushByUserId;
    grn(): string;
}
