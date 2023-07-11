import { ConsumeAction } from "../../core/model";
export default class UseByUserId extends ConsumeAction {
    constructor(namespaceName: string, code: string, userId?: string | null);
}
