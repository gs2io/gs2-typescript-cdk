import { StateMachineSettingOptions } from "./options/StateMachineSettingOptions";
export default class StateMachineSetting {
    private readonly namespaceId;
    private readonly version;
    constructor(namespaceId: string, options?: StateMachineSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
