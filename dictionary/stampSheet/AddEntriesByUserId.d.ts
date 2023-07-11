import { AcquireAction } from "../../core/model";
export default class AddEntriesByUserId extends AcquireAction {
    constructor(namespaceName: string, entryModelNames?: string[] | null, userId?: string | null);
}
