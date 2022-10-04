import { AcquireAction } from "../../core/model";
import JobEntry from "../model/JobEntry";
export default class PushByUserId extends AcquireAction {
    constructor(namespaceName: string, jobs?: JobEntry[] | null, userId?: string);
}
