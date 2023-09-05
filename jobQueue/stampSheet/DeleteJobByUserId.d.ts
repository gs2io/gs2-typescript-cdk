import { ConsumeAction } from "../../core/model";
export default class DeleteJobByUserId extends ConsumeAction {
    constructor(namespaceName: string, jobName?: string | null, userId?: string | null);
}
