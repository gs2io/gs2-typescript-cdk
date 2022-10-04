import DrawByUserId from "../stampSheet/DrawByUserId";
import { Config } from "../../core/model";
export default class LotteryModelRef {
    private namespaceName;
    private lotteryName;
    constructor(namespaceName: string, lotteryName: string);
    draw(count: number, config?: Config[] | null, userId?: string): DrawByUserId;
    grn(): string;
}
