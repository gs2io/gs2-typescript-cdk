import ExperienceModelRef from "./ExperienceModelRef";
import AddExperienceByUserId from "../stampSheet/AddExperienceByUserId";
import SetExperienceByUserId from "../stampSheet/SetExperienceByUserId";
import AddRankCapByUserId from "../stampSheet/AddRankCapByUserId";
import SetRankCapByUserId from "../stampSheet/SetRankCapByUserId";
import MultiplyAcquireActionsByUserId from "../stampSheet/MultiplyAcquireActionsByUserId";
import { AcquireAction } from "../../core/model";
import SubExperienceByUserId from "../stampSheet/SubExperienceByUserId";
import SubRankCapByUserId from "../stampSheet/SubRankCapByUserId";
import VerifyRankByUserId from "../stampSheet/VerifyRankByUserId";
import { StatusVerifyType } from "../stampSheet/enum/StatusVerifyType";
import VerifyRankCapByUserId from "../stampSheet/VerifyRankCapByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    experienceModel(experienceName: string): ExperienceModelRef;
    addExperience(experienceName: string, propertyId: string, experienceValue?: number | null, truncateExperienceWhenRankUp?: boolean | null, userId?: string): AddExperienceByUserId;
    setExperience(experienceName: string, propertyId: string, experienceValue?: number | null, userId?: string): SetExperienceByUserId;
    addRankCap(experienceName: string, propertyId: string, rankCapValue: number, userId?: string): AddRankCapByUserId;
    setRankCap(experienceName: string, propertyId: string, rankCapValue: number, userId?: string): SetRankCapByUserId;
    multiplyAcquireActions(experienceName: string, propertyId: string, rateName: string, acquireActions?: AcquireAction[] | null, userId?: string): MultiplyAcquireActionsByUserId;
    subExperience(experienceName: string, propertyId: string, experienceValue?: number | null, userId?: string): SubExperienceByUserId;
    subRankCap(experienceName: string, propertyId: string, rankCapValue: number, userId?: string): SubRankCapByUserId;
    verifyRank(experienceName: string, verifyType: StatusVerifyType, propertyId: string, rankValue?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifyRankByUserId;
    verifyRankCap(experienceName: string, verifyType: StatusVerifyType, propertyId: string, rankCapValue: number, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifyRankCapByUserId;
    grn(): string;
}
