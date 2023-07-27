import IVariable from "./IVariable";
import ITask from "./ITask";
import Script from "./Script";
import StateMachineDefinition from "./StateMachineDefinition";
export default class StateMachine {
    name: string;
    variables: IVariable[];
    tasks: ITask[];
    entryPointValue: string;
    stateMachineDefinition: StateMachineDefinition;
    constructor(stateMachineDefinition: StateMachineDefinition, name: string, variables: IVariable[]);
    task(...args: ITask[]): this;
    entryPoint(taskName: string): this;
    scripts(): Script[];
    gsl(): string;
    mermaid(): string;
}
