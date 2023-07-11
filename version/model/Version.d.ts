import { VersionOptions } from "./options/VersionOptions";
export default class Version {
    private readonly major;
    private readonly minor;
    private readonly micro;
    constructor(major: number, minor: number, micro: number, options?: VersionOptions | null);
    properties(): {
        [name: string]: any;
    };
}
