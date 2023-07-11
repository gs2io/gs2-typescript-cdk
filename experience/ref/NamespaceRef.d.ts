import ExperienceModelRef from "./ExperienceModelRef";
import AddExperienceByUserId from "../stampSheet/AddExperienceByUserId";
import AddRankCapByUserId from "../stampSheet/AddRankCapByUserId";
import SetRankCapByUserId from "../stampSheet/SetRankCapByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    experienceModel(experienceName: string): ExperienceModelRef;
    addExperience(experienceName: string, propertyId: string, experienceValue: number, userId?: string | null): AddExperienceByUserId;
    addRankCap(experienceName: string, propertyId: string, rankCapValue: number, userId?: string | null): AddRankCapByUserId;
    setRankCap(experienceName: string, propertyId: string, rankCapValue: number, userId?: string | null): SetRankCapByUserId;
    grn(): string;
}
