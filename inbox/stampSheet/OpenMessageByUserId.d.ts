import { ConsumeAction } from "../../core/model";
export default class OpenMessageByUserId extends ConsumeAction {
    constructor(namespaceName: string, messageName?: string | null, userId?: string | null);
}
