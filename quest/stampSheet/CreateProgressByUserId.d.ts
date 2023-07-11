import { AcquireAction } from "../../core/model";
import { Config } from "../../core/model";
export default class CreateProgressByUserId extends AcquireAction {
    constructor(namespaceName: string, questModelId: string, force?: boolean | null, config?: Config[] | null, userId?: string | null);
}
