import Version from "./Version";
import { SignTargetVersionOptions } from "./options/SignTargetVersionOptions";
export default class SignTargetVersion {
    private readonly region;
    private readonly ownerId;
    private readonly namespaceName;
    private readonly versionName;
    private readonly version;
    constructor(region: string, ownerId: string, namespaceName: string, versionName: string, version: Version, options?: SignTargetVersionOptions | null);
    properties(): {
        [name: string]: any;
    };
}
