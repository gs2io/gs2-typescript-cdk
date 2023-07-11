import { OutputOptions } from "./options/OutputOptions";
export default class Output {
    private readonly name;
    private readonly text;
    private readonly createdAt;
    constructor(name: string, text: string, createdAt: number, options?: OutputOptions | null);
    properties(): {
        [name: string]: any;
    };
}
