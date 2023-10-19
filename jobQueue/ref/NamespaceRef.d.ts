import PushByUserId from "../stampSheet/PushByUserId";
import JobEntry from "../model/JobEntry";
import DeleteJobByUserId from "../stampSheet/DeleteJobByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    push(jobs?: JobEntry[] | null, userId?: string | null): PushByUserId;
    deleteJob(jobName?: string | null, userId?: string | null): DeleteJobByUserId;
    grn(): string;
}
