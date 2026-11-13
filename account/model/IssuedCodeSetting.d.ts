import { IssuedCodeSettingOptions } from "./options/IssuedCodeSettingOptions";
export default class IssuedCodeSetting {
    private readonly expiresDays;
    private readonly deleteOnUse;
    private readonly maxFailedAttempts;
    constructor(expiresDays: number, deleteOnUse: boolean, options?: IssuedCodeSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
