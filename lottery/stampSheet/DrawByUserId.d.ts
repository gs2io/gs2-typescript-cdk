import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
export default class DrawByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly lotteryName;
    private readonly userId;
    private readonly count;
    private readonly config;
    constructor(namespaceName: string, lotteryName: string, count: number, config?: Config[] | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
