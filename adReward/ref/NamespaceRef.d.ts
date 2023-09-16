import AcquirePointByUserId from "../stampSheet/AcquirePointByUserId";
import ConsumePointByUserId from "../stampSheet/ConsumePointByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    acquirePoint(point: number, userId?: string | null): AcquirePointByUserId;
    consumePoint(point: number, userId?: string | null): ConsumePointByUserId;
    grn(): string;
}
