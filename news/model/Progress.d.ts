import { ProgressOptions } from "./options/ProgressOptions";
export default class Progress {
    private readonly uploadToken;
    private readonly generated;
    private readonly patternCount;
    private readonly createdAt;
    private readonly updatedAt;
    constructor(uploadToken: string, generated: number, patternCount: number, createdAt: number, updatedAt: number, options?: ProgressOptions | null);
    properties(): {
        [name: string]: any;
    };
}
