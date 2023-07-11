import { ConsumeAction } from "../../core/model";
export default class DeleteAwaitByUserId extends ConsumeAction {
    constructor(namespaceName: string, awaitName?: string | null, userId?: string | null);
}
