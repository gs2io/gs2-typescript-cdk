import { ConsumeAction } from "../../core/model";
export default class DecreaseCounterByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly counterName;
    private readonly userId;
    private readonly value;
    constructor(namespaceName: string, counterName: string, value: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
