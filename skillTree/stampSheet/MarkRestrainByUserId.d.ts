import { ConsumeAction } from "../../core/model";
export default class MarkRestrainByUserId extends ConsumeAction {
    constructor(namespaceName: string, nodeModelNames: string[], userId?: string | null);
}
