import { ConsumeAction } from "../../core/model";
export default class DeleteEntriesByUserId extends ConsumeAction {
    constructor(namespaceName: string, entryModelNames?: string[] | null, userId?: string | null);
}
