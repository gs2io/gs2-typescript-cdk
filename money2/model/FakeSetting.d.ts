import { FakeSettingOptions } from "./options/FakeSettingOptions";
import { FakeSettingAcceptFakeReceipt } from "./enum/FakeSettingAcceptFakeReceipt";
export default class FakeSetting {
    private readonly acceptFakeReceipt;
    constructor(acceptFakeReceipt: FakeSettingAcceptFakeReceipt, options?: FakeSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
