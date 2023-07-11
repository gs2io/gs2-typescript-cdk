import { ConsumeAction } from "../../core/model";
export default class DeleteProgressByUserId extends ConsumeAction {
    constructor(namespaceName: string, userId?: string | null);
}
