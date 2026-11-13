import OpenIdConnectSetting from "../OpenIdConnectSetting";
import IssuedCodeSetting from "../IssuedCodeSetting";
export interface TakeOverTypeModelOptions {
    metadata?: string | null;
    openIdConnectSetting?: OpenIdConnectSetting | null;
    issuedCodeSetting?: IssuedCodeSetting | null;
}
