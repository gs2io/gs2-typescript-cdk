import { OutputOptions } from "./options/OutputOptions";
export default class Output {
    private readonly text;
    constructor(text: string, options?: OutputOptions | null);
    properties(): {
        [name: string]: any;
    };
}
