import { ConsumeAction } from "../../core/model";
export default class UseByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly code;
    constructor(namespaceName: string, code: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
