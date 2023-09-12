import NodeModelRef from "./NodeModelRef";
import MarkReleaseByUserId from "../stampSheet/MarkReleaseByUserId";
import MarkRestrainByUserId from "../stampSheet/MarkRestrainByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    nodeModel(nodeModelName: string): NodeModelRef;
    markRelease(nodeModelNames: string[], userId?: string | null): MarkReleaseByUserId;
    markRestrain(nodeModelNames: string[], userId?: string | null): MarkRestrainByUserId;
    grn(): string;
}
