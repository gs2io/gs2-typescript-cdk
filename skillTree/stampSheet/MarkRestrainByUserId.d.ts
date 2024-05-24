import { ConsumeAction } from "../../core/model";
export default class MarkRestrainByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly propertyId;
    private readonly nodeModelNames;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, propertyId: string, nodeModelNames: string[], timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
