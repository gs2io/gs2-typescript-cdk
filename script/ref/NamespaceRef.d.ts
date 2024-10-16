import InvokeScript from "../stampSheet/InvokeScript";
import RandomStatus from "../model/RandomStatus";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    invokeScript(scriptId: string, args?: string | null, randomStatus?: RandomStatus | null, userId?: string): InvokeScript;
    grn(): string;
}
