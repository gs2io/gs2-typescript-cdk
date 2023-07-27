import IGslElement from "./IGslElement";
import IVariable from "./IVariable";
export default class Event implements IGslElement {
    name: string;
    arguments: IVariable[];
    fromTaskName: string;
    nextTaskName: string;
    constructor(name: string, args: IVariable[], nextTaskName: string);
    gsl(): string;
}
