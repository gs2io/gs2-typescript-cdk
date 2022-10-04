import PushByUserId from "../stampSheet/PushByUserId";
import JobEntry from "../model/JobEntry";
export default class NamespaceRef {
    private namespaceName;
    constructor(namespaceName: string);
    push(jobs?: JobEntry[] | null, userId?: string): PushByUserId;
    grn(): string;
}
