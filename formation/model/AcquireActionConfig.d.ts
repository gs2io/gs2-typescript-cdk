import { AcquireActionConfigOptions } from "./options/AcquireActionConfigOptions";
export default class AcquireActionConfig {
    private readonly name;
    private readonly config;
    constructor(name: string, options?: AcquireActionConfigOptions | null);
    properties(): {
        [name: string]: any;
    };
}
