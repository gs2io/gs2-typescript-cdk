import { ConsumeAction } from "../../core/model";
export default class DeleteEntriesByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly entryModelNames;
    constructor(namespaceName: string, entryModelNames?: string[] | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
