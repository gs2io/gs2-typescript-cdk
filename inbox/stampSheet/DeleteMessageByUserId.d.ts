import { ConsumeAction } from "../../core/model";
export default class DeleteMessageByUserId extends ConsumeAction {
    constructor(namespaceName: string, messageName?: string | null, userId?: string | null);
}
