import Func from "./Func";
export default class Join implements Func {
    separator: string;
    values: string[];
    constructor(separator: string, values: string[]);
    str(): string;
}
