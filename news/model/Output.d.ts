import { OutputOptions } from "./options/OutputOptions";
export default class Output {
    private readonly text;
    private readonly revision;
    constructor(text: string, options?: OutputOptions | null);
    properties(): {
        [name: string]: any;
    };
}
