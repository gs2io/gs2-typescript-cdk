import { ConsumeAction } from "../../core/model";
import ScopedValue from "../model/ScopedValue";
export default class ResetCounterByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly counterName;
    private readonly scopes;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, counterName: string, scopes: ScopedValue[], timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
