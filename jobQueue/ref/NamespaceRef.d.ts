import PushByUserId from "../stampSheet/PushByUserId";
import JobEntry from "../model/JobEntry";
import DeleteJobByUserId from "../stampSheet/DeleteJobByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    push(jobs?: JobEntry[] | null, userId?: string): PushByUserId;
    deleteJob(jobName?: string | null, userId?: string): DeleteJobByUserId;
    grn(): string;
}
