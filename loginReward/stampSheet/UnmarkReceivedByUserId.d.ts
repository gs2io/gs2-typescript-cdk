import { AcquireAction } from "../../core/model";
export default class UnmarkReceivedByUserId extends AcquireAction {
    constructor(namespaceName: string, bonusModelName: string, stepNumber: number, userId?: string | null);
}
