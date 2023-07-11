import DrawByUserId from "../stampSheet/DrawByUserId";
import { Config } from "../../core/model";
export default class LotteryModelRef {
    private readonly namespaceName;
    private readonly lotteryName;
    constructor(namespaceName: string, lotteryName: string);
    draw(count: number, config?: Config[] | null, userId?: string | null): DrawByUserId;
    grn(): string;
}
