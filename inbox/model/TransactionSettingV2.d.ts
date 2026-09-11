import { TransactionSettingV2Options } from "./options/TransactionSettingV2Options";
export default class TransactionSettingV2 {
    private readonly distributorNamespaceId;
    private readonly enableParallelExecution;
    constructor(distributorNamespaceId: string, enableParallelExecution: boolean, options?: TransactionSettingV2Options | null);
    properties(): {
        [name: string]: any;
    };
}
