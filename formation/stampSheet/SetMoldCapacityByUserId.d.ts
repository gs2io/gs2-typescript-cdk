import { AcquireAction } from "../../core/model";
export default class SetMoldCapacityByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly moldModelName;
    private readonly capacity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, moldModelName: string, capacity: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
