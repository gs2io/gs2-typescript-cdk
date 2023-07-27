import IVariable from "./IVariable";
export default class Result {
    name: string;
    emitEventName: string;
    emitEventArgumentVariableNames: Map<IVariable, string>;
    constructor(name: string, emitEventName: string, emitEventArgumentVariableNames: Map<IVariable, string>);
}
