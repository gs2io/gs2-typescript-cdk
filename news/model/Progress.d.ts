import { ProgressOptions } from "./options/ProgressOptions";
export default class Progress {
    private readonly uploadToken;
    private readonly generated;
    private readonly patternCount;
    private readonly revision;
    constructor(uploadToken: string, generated: number, patternCount: number, options?: ProgressOptions | null);
    properties(): {
        [name: string]: any;
    };
}
