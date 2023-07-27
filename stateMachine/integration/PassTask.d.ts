import ITask from "./ITask";
import Event from "./Event";
export default class PassTask implements ITask {
    private name;
    constructor(name: string);
    getName(): string;
    transition(event: Event): this;
    getEvents(): Event[];
    gsl(): string;
    mermaid(): string;
}
