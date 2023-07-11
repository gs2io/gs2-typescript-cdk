import { AttributeOptions } from "./options/AttributeOptions";
export default class Attribute {
    private readonly name;
    private readonly value;
    constructor(name: string, value: number, options?: AttributeOptions | null);
    properties(): {
        [name: string]: any;
    };
}
