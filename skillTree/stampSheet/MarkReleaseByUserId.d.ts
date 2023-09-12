import { AcquireAction } from "../../core/model";
export default class MarkReleaseByUserId extends AcquireAction {
    constructor(namespaceName: string, nodeModelNames: string[], userId?: string | null);
}
