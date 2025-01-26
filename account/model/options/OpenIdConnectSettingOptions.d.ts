import ScopeValue from "../ScopeValue";
export interface OpenIdConnectSettingOptions {
    clientSecret?: string | null;
    appleTeamId?: string | null;
    appleKeyId?: string | null;
    applePrivateKeyPem?: string | null;
    doneEndpointUrl?: string | null;
    additionalScopeValues?: ScopeValue[] | null;
    additionalReturnValues?: string[] | null;
}
