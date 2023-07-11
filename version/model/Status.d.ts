import VersionModel from "./VersionModel";
import { StatusOptions } from "./options/StatusOptions";
export default class Status {
    private readonly versionModel;
    private readonly currentVersion;
    constructor(versionModel: VersionModel, options?: StatusOptions | null);
    properties(): {
        [name: string]: any;
    };
}
