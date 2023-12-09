import { ConsumeAction } from "../../core/model";
export default class OpenMessageByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly messageName;
    constructor(namespaceName: string, messageName?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
