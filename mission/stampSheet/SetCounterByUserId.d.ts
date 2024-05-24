import { AcquireAction } from "../../core/model";
import ScopedValue from "../model/ScopedValue";
export default class SetCounterByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly counterName;
    private readonly userId;
    private readonly values;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, counterName: string, values?: ScopedValue[] | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
