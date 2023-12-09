import { ConsumeAction } from "../../core/model";
export default class MarkRestrainByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly nodeModelNames;
    constructor(namespaceName: string, nodeModelNames: string[], userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
