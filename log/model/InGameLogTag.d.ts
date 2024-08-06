import { InGameLogTagOptions } from "./options/InGameLogTagOptions";
export default class InGameLogTag {
    private readonly key;
    private readonly value;
    constructor(key: string, value: string, options?: InGameLogTagOptions | null);
    properties(): {
        [name: string]: any;
    };
}
