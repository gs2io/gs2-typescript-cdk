import OpenIdConnectSetting from "./OpenIdConnectSetting";
import { TakeOverTypeModelOptions } from "./options/TakeOverTypeModelOptions";
export default class TakeOverTypeModel {
    private readonly type;
    private readonly openIdConnectSetting;
    private readonly metadata;
    constructor(type: number, openIdConnectSetting: OpenIdConnectSetting, options?: TakeOverTypeModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
