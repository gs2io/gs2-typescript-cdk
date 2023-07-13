import { ConsumeAction } from "../../core/model";
export default class MarkReceivedByUserId extends ConsumeAction {
    constructor(namespaceName: string, bonusModelName: string, stepNumber: number, userId?: string | null);
}
