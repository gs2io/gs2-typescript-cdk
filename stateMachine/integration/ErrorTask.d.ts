import ITask from "./ITask";
import Event from "./Event";
export default class ErrorTask implements ITask {
    private name;
    private arguments;
    constructor(name: string);
    getName(): string;
    transition(event: Event): this;
    getEvents(): Event[];
    gsl(): string;
    mermaid(): string;
}
