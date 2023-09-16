import { AcquireAction } from "../../core/model";
export default class AcquirePointByUserId extends AcquireAction {
    constructor(namespaceName: string, point: number, userId?: string | null);
}
