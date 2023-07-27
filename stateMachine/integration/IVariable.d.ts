import IGslElement from "./IGslElement";
export default interface IVariable extends IGslElement {
    getName(): string;
    getTypeName(): string;
    gsl(): string;
}
