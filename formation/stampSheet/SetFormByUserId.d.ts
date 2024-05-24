import { AcquireAction } from "../../core/model";
import Slot from "../model/Slot";
export default class SetFormByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly moldModelName;
    private readonly index;
    private readonly slots;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, moldModelName: string, index: number, slots: Slot[], timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
