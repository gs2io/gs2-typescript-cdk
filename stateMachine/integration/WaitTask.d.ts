import ITask from "./ITask";
import Event from "./Event";
import IVariable from "./IVariable";
export default class WaitTask implements ITask {
    name: string;
    private results;
    private events;
    constructor(name: string);
    getName(): string;
    transition(event: Event): this;
    getEvents(): Event[];
    result(resultName: string, emitEventArgumentVariableNames: Map<IVariable, string>, nextTaskName: string): this;
    gsl(): string;
    mermaid(): string;
}
