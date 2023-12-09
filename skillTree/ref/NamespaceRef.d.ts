import NodeModelRef from "./NodeModelRef";
import MarkReleaseByUserId from "../stampSheet/MarkReleaseByUserId";
import MarkRestrainByUserId from "../stampSheet/MarkRestrainByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    nodeModel(nodeModelName: string): NodeModelRef;
    markRelease(nodeModelNames: string[], userId?: string): MarkReleaseByUserId;
    markRestrain(nodeModelNames: string[], userId?: string): MarkRestrainByUserId;
    grn(): string;
}
