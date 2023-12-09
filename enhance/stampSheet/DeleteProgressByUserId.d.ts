import { ConsumeAction } from "../../core/model";
export default class DeleteProgressByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    constructor(namespaceName: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
