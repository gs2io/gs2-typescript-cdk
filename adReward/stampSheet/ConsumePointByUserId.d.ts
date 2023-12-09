import { ConsumeAction } from "../../core/model";
export default class ConsumePointByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly point;
    constructor(namespaceName: string, point: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
