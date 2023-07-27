import IVariable from "./IVariable";
export default class InParam {
    currentStateMachineVariable: IVariable;
    subStateMachineVariable: IVariable;
    constructor(currentStateMachineVariable: IVariable, subStateMachineVariable: IVariable);
}
