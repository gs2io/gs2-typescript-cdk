import ITask from "./ITask";
import InParam from "./InParam";
import OutParam from "./OutParam";
import Event from "./Event";
export default class SubStateMachineTask implements ITask {
    name: string;
    subStateMachineName: string;
    private inParams;
    private outParams;
    events: Event[];
    constructor(name: string, subStateMachineName: string, inParams: InParam[], outParams: OutParam[]);
    getName(): string;
    transition(event: Event): this;
    getEvents(): Event[];
    gsl(): string;
    mermaid(): string;
}
