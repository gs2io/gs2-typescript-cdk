import ExperienceModelRef from "./ExperienceModelRef";
import AddExperienceByUserId from "../stampSheet/AddExperienceByUserId";
import AddRankCapByUserId from "../stampSheet/AddRankCapByUserId";
import SetRankCapByUserId from "../stampSheet/SetRankCapByUserId";
import MultiplyAcquireActionsByUserId from "../stampSheet/MultiplyAcquireActionsByUserId";
import { AcquireAction } from "../../core/model";
import SubExperienceByUserId from "../stampSheet/SubExperienceByUserId";
import SubRankCapByUserId from "../stampSheet/SubRankCapByUserId";
import VerifyRankByUserId from "../stampSheet/VerifyRankByUserId";
import VerifyRankCapByUserId from "../stampSheet/VerifyRankCapByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    experienceModel(experienceName: string): ExperienceModelRef;
    addExperience(experienceName: string, propertyId: string, experienceValue?: number | null, userId?: string | null): AddExperienceByUserId;
    addRankCap(experienceName: string, propertyId: string, rankCapValue: number, userId?: string | null): AddRankCapByUserId;
    setRankCap(experienceName: string, propertyId: string, rankCapValue: number, userId?: string | null): SetRankCapByUserId;
    multiplyAcquireActions(experienceName: string, propertyId: string, rateName: string, acquireActions?: AcquireAction[] | null, userId?: string | null): MultiplyAcquireActionsByUserId;
    subExperience(experienceName: string, propertyId: string, experienceValue?: number | null, userId?: string | null): SubExperienceByUserId;
    subRankCap(experienceName: string, propertyId: string, rankCapValue: number, userId?: string | null): SubRankCapByUserId;
    verifyRank(experienceName: string, verifyType: string, propertyId: string, rankValue?: number | null, userId?: string | null): VerifyRankByUserId;
    verifyRankCap(experienceName: string, verifyType: string, propertyId: string, rankCapValue: number, userId?: string | null): VerifyRankCapByUserId;
    grn(): string;
}
