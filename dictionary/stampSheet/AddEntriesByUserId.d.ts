import { AcquireAction } from "../../core/model";
export default class AddEntriesByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly entryModelNames;
    constructor(namespaceName: string, entryModelNames?: string[] | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
