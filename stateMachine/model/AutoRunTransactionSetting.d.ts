import { AutoRunTransactionSettingOptions } from "./options/AutoRunTransactionSettingOptions";
export default class AutoRunTransactionSetting {
    private readonly distributorNamespaceId;
    private readonly queueNamespaceId;
    constructor(distributorNamespaceId: string, options?: AutoRunTransactionSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
