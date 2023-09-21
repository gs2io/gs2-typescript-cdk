import { TargetVersionOptions } from "./options/TargetVersionOptions";
export default class TargetVersion {
    private readonly versionName;
    private readonly body;
    private readonly signature;
    private readonly version;
    constructor(versionName: string, options?: TargetVersionOptions | null);
    properties(): {
        [name: string]: any;
    };
}
