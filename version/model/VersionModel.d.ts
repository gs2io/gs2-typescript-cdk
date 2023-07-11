import Version from "./Version";
import { VersionModelOptions } from "./options/VersionModelOptions";
import { VersionModelScopeIsPassiveOptions } from "./options/VersionModelScopeIsPassiveOptions";
import { VersionModelScopeIsActiveOptions } from "./options/VersionModelScopeIsActiveOptions";
import { VersionModelScope } from "./enum/VersionModelScope";
export default class VersionModel {
    private readonly name;
    private readonly warningVersion;
    private readonly errorVersion;
    private readonly scope;
    private readonly metadata;
    private readonly currentVersion;
    private readonly needSignature;
    private readonly signatureKeyId;
    constructor(name: string, warningVersion: Version, errorVersion: Version, scope: VersionModelScope, options?: VersionModelOptions | null);
    static scopeIsPassive(name: string, warningVersion: Version, errorVersion: Version, needSignature: boolean, options?: VersionModelScopeIsPassiveOptions | null): VersionModel;
    static scopeIsActive(name: string, warningVersion: Version, errorVersion: Version, currentVersion: Version, options?: VersionModelScopeIsActiveOptions | null): VersionModel;
    properties(): {
        [name: string]: any;
    };
}
