import InvokeScript from "../stampSheet/InvokeScript";
import RandomStatus from "../model/RandomStatus";
export default class ScriptRef {
    private readonly namespaceName;
    private readonly scriptName;
    constructor(namespaceName: string, scriptName: string);
    invokeScript(scriptId: string, args?: string | null, randomStatus?: RandomStatus | null, userId?: string): InvokeScript;
    grn(): string;
}
