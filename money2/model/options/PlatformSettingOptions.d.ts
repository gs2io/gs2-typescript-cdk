import AppleAppStoreSetting from "../AppleAppStoreSetting";
import GooglePlaySetting from "../GooglePlaySetting";
import FakeSetting from "../FakeSetting";
export interface PlatformSettingOptions {
    appleAppStore?: AppleAppStoreSetting | null;
    googlePlay?: GooglePlaySetting | null;
    fake?: FakeSetting | null;
}
