import { ConsumeAction } from "../../core/model";
export default class ConsumePointByUserId extends ConsumeAction {
    constructor(namespaceName: string, point: number, userId?: string | null);
}
