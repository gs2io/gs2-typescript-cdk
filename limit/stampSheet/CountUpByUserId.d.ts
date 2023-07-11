import { ConsumeAction } from "../../core/model";
export default class CountUpByUserId extends ConsumeAction {
    constructor(namespaceName: string, limitName: string, counterName: string, countUpValue?: number | null, maxValue?: number | null, userId?: string | null);
}
