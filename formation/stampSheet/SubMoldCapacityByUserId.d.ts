import { ConsumeAction } from "../../core/model";
export default class SubMoldCapacityByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly moldModelName;
    private readonly capacity;
    constructor(namespaceName: string, moldModelName: string, capacity: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
