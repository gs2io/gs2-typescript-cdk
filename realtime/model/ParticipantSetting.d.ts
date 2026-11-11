import { ParticipantSettingOptions } from "./options/ParticipantSettingOptions";
export default class ParticipantSetting {
    private readonly userId;
    private readonly scriptId;
    constructor(userId: string, scriptId: string, options?: ParticipantSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
