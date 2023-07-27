import ITask from "./ITask";
import IVariable from "./IVariable";
import Event from "./Event";
import Script from "./Script";
export default class Task implements ITask {
    private name;
    private arguments;
    private script;
    private events;
    private results;
    constructor(name: string, args: IVariable[], script: string);
    getName(): string;
    transition(event: Event): this;
    getEvents(): Event[];
    result(name: string, emitEventArgumentVariableNames: Map<IVariable, string>, nextTaskName: string): this;
    scriptPayload(): Script;
    gsl(): string;
    mermaid(): string;
}
