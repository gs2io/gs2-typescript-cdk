import IVariable from "./IVariable";
export default class OutParam {
    subStateMachineVariable: IVariable;
    currentStateMachineVariable: IVariable;
    constructor(subStateMachineVariable: IVariable, currentStateMachineVariable: IVariable);
}
