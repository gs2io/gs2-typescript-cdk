import IVariable from "./IVariable";
export default class ArrayType implements IVariable {
    private name;
    constructor(name: string);
    getName(): string;
    getTypeName(): string;
    gsl(): string;
}
