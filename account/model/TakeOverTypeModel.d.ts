import OpenIdConnectSetting from "./OpenIdConnectSetting";
import IssuedCodeSetting from "./IssuedCodeSetting";
import { TakeOverTypeModelOptions } from "./options/TakeOverTypeModelOptions";
import { TakeOverTypeModelTakeOverMethodIsOpenIdConnectOptions } from "./options/TakeOverTypeModelTakeOverMethodIsOpenIdConnectOptions";
import { TakeOverTypeModelTakeOverMethodIsIssuedCodeOptions } from "./options/TakeOverTypeModelTakeOverMethodIsIssuedCodeOptions";
import { TakeOverTypeModelTakeOverMethod } from "./enums/TakeOverTypeModelTakeOverMethod";
export default class TakeOverTypeModel {
    private readonly type;
    private readonly takeOverMethod;
    private readonly metadata;
    private readonly openIdConnectSetting;
    private readonly issuedCodeSetting;
    constructor(type: number, takeOverMethod: TakeOverTypeModelTakeOverMethod, options?: TakeOverTypeModelOptions | null);
    static takeOverMethodIsOpenIdConnect(type: number, openIdConnectSetting: OpenIdConnectSetting, options?: TakeOverTypeModelTakeOverMethodIsOpenIdConnectOptions | null): TakeOverTypeModel;
    static takeOverMethodIsIssuedCode(type: number, issuedCodeSetting: IssuedCodeSetting, options?: TakeOverTypeModelTakeOverMethodIsIssuedCodeOptions | null): TakeOverTypeModel;
    properties(): {
        [name: string]: any;
    };
}
