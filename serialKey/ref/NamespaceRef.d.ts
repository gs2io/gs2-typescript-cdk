import CampaignModelRef from "./CampaignModelRef";
import RevertUseByUserId from "../stampSheet/RevertUseByUserId";
import UseByUserId from "../stampSheet/UseByUserId";
import VerifyCodeByUserId from "../stampSheet/VerifyCodeByUserId";
import { SerialKeyVerifyType } from "../stampSheet/enum/SerialKeyVerifyType";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    campaignModel(campaignModelName: string): CampaignModelRef;
    revertUse(code: string, userId?: string): RevertUseByUserId;
    use(code: string, userId?: string): UseByUserId;
    verifyCode(code: string, verifyType: SerialKeyVerifyType, userId?: string): VerifyCodeByUserId;
    grn(): string;
}
