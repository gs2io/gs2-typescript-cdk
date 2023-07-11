import Version from "./Version";
import { TargetVersionOptions } from "./options/TargetVersionOptions";
export default class TargetVersion {
    private readonly versionName;
    private readonly version;
    private readonly body;
    private readonly signature;
    constructor(versionName: string, version: Version, options?: TargetVersionOptions | null);
    properties(): {
        [name: string]: any;
    };
}
