import { ConsumeAction } from "../../core/model";
export default class MarkReceivedByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly bonusModelName;
    private readonly userId;
    private readonly stepNumber;
    constructor(namespaceName: string, bonusModelName: string, stepNumber: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
