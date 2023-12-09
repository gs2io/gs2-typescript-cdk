import { ConsumeAction } from "../../core/model";
export default class CountUpByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly limitName;
    private readonly counterName;
    private readonly userId;
    private readonly countUpValue;
    private readonly maxValue;
    constructor(namespaceName: string, limitName: string, counterName: string, countUpValue?: number | null, maxValue?: number | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
