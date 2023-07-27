import IGslElement from "./IGslElement";
import IMermaidElement from "./IMermaidElement";
import Event from "./Event";
export default interface ITask extends IGslElement, IMermaidElement {
    getName(): string;
    transition(event: Event): ITask;
    getEvents(): Event[];
}
